import Joi from 'joi'
import Router from '../../utils/router'
import validate from '../../utils/validate'
import { voteOnApplication } from '../../services/application'
import Crud from '../../utils/crud'
import Application from '../../models/application'

const router = new Router()

/**
 * Create CRUD routes for application model
 */
const crud = new Crud(router, Application)
crud.except('read')

/**
 * Custom read
 */
router.get('/:id', async (ctx) => {
  return await Application
    .findOne({ _id: ctx.params.id })
    .populate('category')
})

/**
 * Vote on application
 */
router.put('/:applicationId/vote', async (ctx) => {
  const schema = Joi.object().keys({
    vote: Joi.number().integer().min(1).max(5).required()
  })
  const { body } = ctx.request
  await validate(body, schema)
  return await voteOnApplication(ctx.params.applicationId, body.vote)
})

export default router
