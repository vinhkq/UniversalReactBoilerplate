const fastify = require('fastify')
const Next = require('next')

const port = parseInt(global.process.env.PORT, 10) || 3000
const dev = global.process.env.NODE_ENV !== 'production'
const app = Next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = fastify()

  server.get('/*', (req, res) => {
    return handle(req.req, res.res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
