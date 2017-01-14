import Router from 'koa-router'
import applicationsRouter from './applications'
import categoriesRouter from './categories'
import collectionsRouter from './collections'
import commonRouter from './common'

const router = new Router()
router.use('/applications', applicationsRouter.routes())
router.use('/categories', categoriesRouter.routes())
router.use('/collections', collectionsRouter.routes())
router.use('/common', commonRouter.routes())

export default router
