import Router from 'koa-router'
import Application from '../../daos/application'

const router = new Router()

router.get('/', async function (ctx) {
  const app = new Application({ name: +new Date() })
  app.save()
  ctx.body = '{"name": "Tomy"}'
})

export default router
