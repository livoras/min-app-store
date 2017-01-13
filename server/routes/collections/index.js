import Router from '../../utils/router'
import Crud from '../../utils/crud'
import Collection from '../../models/collection'
import { getCollectionsByCategoryId } from '../../services/collection'

const router = new Router()

const crud = new Crud(router, Collection)
crud.except('list', 'read')

crud.read(null, (ctx, query) => {
  return query
    .populate('applications')
    .populate('category')
})

// Get collections by category
router.get('/', async (ctx) => {
  const { categoryId } = ctx.request.query
  return await getCollectionsByCategoryId(categoryId || null)
})

export default router
