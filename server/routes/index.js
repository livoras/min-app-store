import Router from 'koa-router'
import applicationsRouter from './applications'
import categoriesRouter from './categories'
import collectionsRouter from './collections'

const router = new Router()
router.use('/applications', applicationsRouter.routes())
router.use('/categories', categoriesRouter.routes())
router.use('/collections', collectionsRouter.routes())

export default router
