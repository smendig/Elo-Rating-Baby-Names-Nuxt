import { Router } from 'express'
import bodyParser from 'body-parser'
const fs = require('fs')

const GoogleSpreadsheet = require('google-spreadsheet')
const doc = new GoogleSpreadsheet('1nXEXaX5SyRkHzFleLlny4gVJYF9tvhhsYUL-BpI7FWU')

let db = JSON.parse(fs.readFileSync('./server/api/db.json'))
console.log(db)

doc.useServiceAccountAuth(require('./cred.json'), function(err) {
    if (err) { console.log(err) }
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
        console.log(d)
        let i = db.findIndex(i => i.name === d.name)
        if (i >= 0) {
            db.splice(i, 1)
            fs.writeFileSync('./server/api/db.json', JSON.stringify(db))
            return true
        }
        return false
    }
}

function checkValid() { return true }

router.get('/rank', (req, res) => { res.send(db) })
router.post('/choose', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    elo.computeChoose(req.body.battle)
    doc.addRow(1, {
        user: req.body.uname,
        prevu: req.body.prevu,
        IP: req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress.split(',')[0],
        datetime: new Date().toLocaleString(),
        useragent: req.headers['user-agent'],
        N1: req.body.battle[0].name,
        N1Rating: req.body.battle[0].rating,
        N1i: req.body.battle[0].i,
        N2: req.body.battle[1].name,
        N2Rating: req.body.battle[1].rating,
        N2i: req.body.battle[1].i
    }, (err) => {
        if (err) { console.log(err) }
    })
    res.send(db)
})
router.post('/addname', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    if (!elo.addName(req.body)) { return res.status(409).send('Already exists') }
    res.send(db)
})
router.post('/deletename', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    if (req.body.token !== 'sabinyangraisayin') { return res.status(401).send('Unauth') }
    if (!elo.deleteName(req.body)) { return res.status(409).send('Doesnt exists') }
    res.send(db)
})

export default router
