import testRouter from './test'
import applicationRouter from './applications'
import Router from 'koa-router'

const router = new Router()
router.use('/test', testRouter.routes())
router.use('/applications', applicationRouter.routes())

export default router
