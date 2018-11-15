import * as Koa from 'koa'
const app = new Koa()
import * as serve from  'koa-static';

app.use(serve('./static'))

app.use(ctx => {
  console.info(`Page requested, url: '${ctx.request.url}'`)
  ctx.body = 'Hello from Koa'
})

app.listen(3000)

console.info('App listening on port 3000.')
