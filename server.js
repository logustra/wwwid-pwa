const { join } = require('path')
const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3037
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const root = process.cwd()
const handler = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            if (req.url.startsWith('/static/')) {
                res.setHeader('Service-Worker-Allowed', '/')
                app.serveStatic(req, res, join(root, `.${req.url}`))
            } else {
                handler(req, res, req.url)
            }
        })
        .listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on http://localhost:${port}`)
        })
    })
