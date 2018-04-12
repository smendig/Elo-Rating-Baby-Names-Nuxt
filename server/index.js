import express from 'express'
import { Nuxt, Builder } from 'nuxt'
import api from './api'
import morgan from 'morgan'

const app = express()
app.enable('trust proxy')
app.disable('x-powered-by')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)
app.use('/api', api)
app.use(morgan('combined'))

let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')
const nuxt = new Nuxt(config)
if (config.dev) {
    const builder = new Builder(nuxt)
    builder.build().then(listen).catch((error) => {
        console.error(error)
        process.exit(1)
    })
} else {
    listen()
}
app.use(nuxt.render)


function listen() {
    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port)
}
