import Router from '../../utils/router'
import Crud from '../../utils/crud'
import Collection from '../../models/collection'

const router = new Router()

const crud = new Crud(router, Collection)
crud.except('list', 'read')

crud.read(null, (ctx, query) => {
  return query
    .populate('applications')
    .populate('category')
})

// Get collections by category
// TODO

export default router
