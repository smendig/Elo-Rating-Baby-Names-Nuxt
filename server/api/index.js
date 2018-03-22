import { Router } from 'express'
import bodyParser from 'body-parser'
let db = require('./db.json')

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
        }
    },
    addName(d) {
        let nTrimmed = d.name.trim()
        if (db.find(i => i.name === nTrimmed)) { return false }
        db.push({ rating: 1500, name: nTrimmed, i: 0 })
        return true
    },
    deleteName(d) {
        console.log(d)
        let i = db.findIndex(i => i.name === d.name)
        if (i >= 0) {
            db.splice(i, 1)
            return true
        }
        return false
    }
}

function checkValid() { return true }

router.get('/rank', (req, res) => { res.send(db) })
router.post('/choose', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    elo.computeChoose(req.body)
    res.send(db)
})
router.post('/addname', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    if (!elo.addName(req.body)) { return res.status(409).send('Already exists') }
    res.send(db)
})
router.post('/deletename', bodyParser.json(), (req, res) => {
    if (!checkValid(req.body)) { return res.status(403).send('Bad petition') }
    if (!elo.deleteName(req.body)) { return res.status(409).send('Doesnt exists') }
    res.send(db)
})
export default router
