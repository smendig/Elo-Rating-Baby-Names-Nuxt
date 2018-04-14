import { Router } from 'express'
import bodyParser from 'body-parser'
const fs = require('fs')

const GoogleSpreadsheet = require('google-spreadsheet')
const RateLimit = require('express-rate-limit')
const doc = new GoogleSpreadsheet('1nXEXaX5SyRkHzFleLlny4gVJYF9tvhhsYUL-BpI7FWU')
const dbFilePath = './server/api/db.json'
const statsFilePath = './server/api/stats.json'

const PushBullet = require('pushbullet')
const pusher = new PushBullet('o.YyWWR899JqyZDVd0ojMEhfHYIzLg4Vbx')

let sheets = { votos: null, deletes: null, nuevos: null }
let db
if (fs.existsSync(dbFilePath)) {
    db = JSON.parse(fs.readFileSync(dbFilePath))
} else {
    db = []
    fs.writeFileSync(dbFilePath, JSON.stringify(db))
}
let stats
if (fs.existsSync(statsFilePath)) {
    stats = JSON.parse(fs.readFileSync(statsFilePath))
} else {
    stats = {
        ultimoVoto: { user: null, b: null, time: null },
        ultimoAniadido: { user: null, name: null, time: null }
    }
    fs.writeFileSync(statsFilePath, JSON.stringify(stats))
}

let saveTimeout = null

doc.useServiceAccountAuth(require('./cred.json'), function(err) {
    if (err) { console.log(err) }
    doc.getInfo(function(err, info) {
        if (err) { console.log(err) }
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
            if (i2.i > 3) { i1.rating += rDelta }
            if (i1.i > 3) { i2.rating -= rDelta }
            i1.i += 1
            i2.i += 1
            elo.saveToFile('voto', a)
        }
    },
    addName(d) {
        let nTrimmed = d.name.trim()
        if (db.find(i => i.name.toLowerCase() === nTrimmed.toLowerCase())) { return false }
        db.push({ rating: 1500, name: nTrimmed, i: 0 })
        elo.saveToFile('addName', d)
        return true
    },
    deleteName(d) {
        let i = db.findIndex(i => i.name === d.name)
        if (i >= 0) {
            db.splice(i, 1)
            elo.saveToFile('deleteName', d)
            return true
        }
        return false
    },
    saveToFile(tipo, v) {
        console.log('File Save Programado')
        if (saveTimeout) { clearTimeout(saveTimeout) }
        saveTimeout = setTimeout(() => {
            if (tipo === 'deleteName' || tipo === 'addName') {
                pusher.note({}, 'Nuevo ' + tipo, JSON.stringify(v, null, 4), function(error) {
                    if (error) { console.log(error) }
                })
            }
            fs.writeFile(dbFilePath, JSON.stringify(db, null, 4), (e) => {
                if (e) { console.log(e) } else { console.log('File Save') }
            })
            fs.writeFile(statsFilePath, JSON.stringify(stats, null, 4), (e) => {
                if (e) { console.log(e) } else { console.log('File Save Stats') }
            })
            saveTimeout = null
        }, 15000)
    }
}

function getIdObject(tipo, req) {
    let o = {
        user: req.body.uname,
        prevu: req.body.prevu,
        IP: req.ip,
        datetime: new Date().toLocaleString(),
        useragent: req.headers['user-agent']
    }
    if (tipo === 'votos') {
        o.N1 = req.body.battle[0].name
        o.N1Rating = req.body.battle[0].rating
        o.N1i = req.body.battle[0].i
        o.N2 = req.body.battle[1].name
        o.N2Rating = req.body.battle[1].rating
        o.N2i = req.body.battle[1].i
    } else if (tipo === 'deletes') {
        o.deletepetition = req.body.name
        o.token = req.body.token
    } else if (tipo === 'nuevos') {
        o.nuevopetition = req.body.name
    }
    return o
}

function checkValid(tipo, b) {
    if (!b.uname || b.uname.length < 2 || b.uname.length > 35) { return false }
    if (tipo === 'choose') {
        if (!b.battle || b.battle.length !== 2) { return false }
    } else if (tipo === 'addname') {
        if (!b.name || b.name.length < 1 || b.name.length > 35) { return false }
    }
    return true
}

const limiter1 = new RateLimit({
    windowMs: 10 * 1000,
    max: 25,
    delayAfter: 10,
    delayMs: 1000
})

const limiter2 = new RateLimit({
    windowMs: 20 * 1000,
    max: 10,
    delayAfter: 5,
    delayMs: 2000
})

router.get('/rank', (req, res) => { res.send(db) })
router.post('/choose', limiter1, bodyParser.json(), (req, res) => {
    if (!checkValid('choose', req.body)) { return res.status(403).send('Bad petition') }
    elo.computeChoose(req.body.battle)
    sheets.votos.addRow(getIdObject('votos', req), (err) => { if (err) { console.log(err) } })
    stats.ultimoVoto = { user: req.body.uname, b: req.body.battle, time: Date.now() }
    res.send(db)
})
router.post('/addname', limiter2, bodyParser.json(), (req, res) => {
    if (!checkValid('addname', req.body)) { return res.status(403).send('Bad petition') }
    if (!elo.addName(req.body)) { res.status(409).send('Already exists') } else {
        sheets.nuevos.addRow(getIdObject('nuevos', req), (err) => { if (err) { console.log(err) } })
        stats.ultimoAniadido = { user: req.body.uname, name: req.body.name, time: Date.now() }
        res.send(db)
    }
})
router.post('/deletename', limiter2, bodyParser.json(), (req, res) => {
    if (!checkValid('deletename', req.body)) { return res.status(403).send('Bad petition') }
    sheets.deletes.addRow(getIdObject('deletes', req), (err) => { if (err) { console.log(err) } })
    if (req.body.token !== 'sabinyangraisayin') { res.status(401).send('Hey, no intentes borrar nombres') } else if (!elo.deleteName(req.body)) { res.status(409).send('Doesnt exists') } else { res.send(db) }
})

router.get('/ultimovoto', (req, res) => { res.send(stats.ultimoVoto) })
router.get('/ultimoaniadido', (req, res) => { res.send(stats.ultimoAniadido) })

router.get('/ip', (req, res) => {
    res.send(req.ip)
})

export default router
