import Router from 'koa-router'

const router = new Router

router.get('/', async function (ctx) {
  ctx.body = '{"name": "Tomy"}'
})

export default router
