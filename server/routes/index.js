import applicationsRouter from './applications'
import categoriesRouter from './categories'
import Router from 'koa-router'

const router = new Router()
router.use('/applications', applicationsRouter.routes())
router.use('/categories', categoriesRouter.routes())

export default router
