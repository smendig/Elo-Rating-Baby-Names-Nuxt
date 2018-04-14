const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    head: {
        title: 'RaiSabin Baby Name',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { hid: 'robots', name: 'robots', content: 'noindex,nofollow' }
        ],
        link: [
            { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons', type: 'text/css' },
            { rel: 'stylesheet', href: 'https://unpkg.com/vuetify@1.0.14/dist/vuetify.min.css', type: 'text/css' }
        ],
        script: []
    },
    css: ['~/assets/css/main.css'],
    mode: 'spa',
    serverMiddleware: [],
    loading: { color: '#3B8070' },
    plugins: ['~plugins/vuetify', { src: '~/plugins/localStorage.js', ssr: false }],
    build: {
        vendor: ['axios'],
        plugins: [
            new CompressionPlugin()
        ],
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
