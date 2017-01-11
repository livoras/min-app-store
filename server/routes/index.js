import testRouter from './test'
import Router from 'koa-router'

const router = new Router()
router.use('/test', testRouter.routes())

export default router
