const Koa = require('koa')
const app = new Koa()

// response
app.use(ctx => {
  console.info(`Page requested, url: '${ctx.request.url}'`)
  ctx.body = 'Hello Koa'
})

app.listen(3000)

console.info('App listening on port 3000.')
