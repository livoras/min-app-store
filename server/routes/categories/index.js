import Router from '../../utils/router'
import Crud from '../../utils/crud'
import Category from '../../models/category'
import { getApplicationsByCategoryId } from '../../services/application'

const router = new Router()

const crud = new Crud(router, Category)
crud.all()

/**
 * 通过分类获取该分类下的应用程序
 */
router.get('/:categoryId/applications', async (ctx) => {
  const { offset, limit } = ctx.request.query
  return await getApplicationsByCategoryId(ctx.params.categoryId, offset, limit)
})

export default router
