import { Router } from 'express'
import bodyParser from 'body-parser'
const fs = require('fs')

const GoogleSpreadsheet = require('google-spreadsheet')
const RateLimit = require('express-rate-limit')
const doc = new GoogleSpreadsheet('1nXEXaX5SyRkHzFleLlny4gVJYF9tvhhsYUL-BpI7FWU')

let sheets = { votos: null, deletes: null, nuevos: null }

let db = JSON.parse(fs.readFileSync('./server/api/db.json'))

doc.useServiceAccountAuth(require('./cred.json'), function(err) {
    if (err) { console.log(err) }
    doc.getInfo(function(err, info) {
        sheets.votos = info.worksheets[0]
        sheets.deletes = info.worksheets[1]
        sheets.nuevos = info.worksheets[2]
    })
})

const router = Router()

const elo = {
    getRatingDelta(myRating, opponentRating, myGameResult) {
        if ([0, 0.5, 1].indexOf(myGameResult) === -1) { return null }
        var myChanceToWin = 1 / (1 + Math.pow(10, (opponentRating - myRating) / 400))
        return Math.round(32 * (myGameResult - myChanceToWin))
    },
    computeChoose(a) {
        let i1 = db.find(i => i.name === a[0].name)
        let i2 = db.find(i => i.name === a[1].name)
        console.log(i1)
        console.log(i2)
        if (i1 && i2) {
            let rDelta = elo.getRatingDelta(i1.rating, i2.rating, 1)
            i1.rating += rDelta
            i2.rating -= rDelta
            i1.i++
                i2.i++
                fs.writeFileSync('./server/api/db.json', JSON.stringify(db))
        }
    },
    addName(d) {
        let nTrimmed = d.name.trim()
        if (db.find(i => i.name === nTrimmed)) { return false }
        db.push({ rating: 1500, name: nTrimmed, i: 0 })
        fs.writeFileSync('./server/api/db.json', JSON.stringify(db))
        return true
    },
    deleteName(d) {
        let i = db.findIndex(i => i.name === d.name)
        if (i >= 0) {
            db.splice(i, 1)
            fs.writeFileSync('./server/api/db.json', JSON.stringify(db))
            return true
        }
        return false
    }
}

function getIdObject(tipo, req) {
    let o = {
        user: req.body.uname,
        prevu: req.body.prevu,
        IP: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress.split(',')[0],
        datetime: new Date().toLocaleString(),
        useragent: req.headers['user-agent']
    }
    if (tipo === 'votos') {
        o.N1 = req.body.battle[0].name,
            o.N1Rating = req.body.battle[0].rating,
            o.N1i = req.body.battle[0].i,
            o.N2 = req.body.battle[1].name,
            o.N2Rating = req.body.battle[1].rating,
            o.N2i = req.body.battle[1].i
    } else if (tipo === 'deletes') {
        o.deletepetition = JSON.stringify(req.body)
    } else if (tipo === 'nuevos') {
        o.nuevopetition = JSON.stringify(req.body)
    }
    return o
}

function checkValid() { return true }

const limiter1 = new RateLimit({
    windowMs: 10 * 1000,
    max: 15,
    delayAfter: 3,
    delayMs: 1000
})

const limiter2 = new RateLimit({
    windowMs: 20 * 1000,
    max: 4,
    delayAfter: 1,
    delayMs: 2000
})

router.get('/rank', (req, res) => { res.send(db) })
router.post('/choose', limiter1, bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    elo.computeChoose(req.body.battle)
    sheets.votos.addRow(getIdObject('votos', req), (err) => { if (err) { console.log(err) } })
    res.send(db)
})
router.post('/addname', limiter2, bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    sheets.nuevos.addRow(getIdObject('nuevos', req), (err) => { if (err) { console.log(err) } })
    if (!elo.addName(req.body)) { res.status(409).send('Already exists') } else { res.send(db) }
})
router.post('/deletename', limiter2, bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    sheets.deletes.addRow(getIdObject('deletes', req), (err) => { if (err) { console.log(err) } })
    if (req.body.token !== 'sabinyangraisayin') { res.status(401).send('Unauth') } else if (!elo.deleteName(req.body)) { res.status(409).send('Doesnt exists') } else { res.send(db) }
})

router.get('/ip', (req, res) => {
    res.send(req.ip)
})

export default router
