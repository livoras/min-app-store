import Router from '../../utils/router'
import Crud from '../../utils/crud'
import Category from '../../models/category'

const router = new Router()

const crud = new Crud(router, Category)
crud.all()

export default router
