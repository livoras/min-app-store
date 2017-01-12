import Joi from 'joi'
import Router from '../../utils/router'
import validate from '../../utils/validate'
import {
  createApplication,
  deleteApplication,
  updateApplication,
  getApplication,
  voteOnApplication
} from '../../services/application'

const router = new Router()

/**
 * Create application
 */
router.post('/', async (ctx) => {
  return await createApplication(ctx.request.body)
})

/**
 * Delete application
 */
router.delete('/:applicationId', async (ctx) => {
  return await deleteApplication(ctx.params.applicationId)
})

/**
 * Update application
 */
router.put('/:applicationId', async (ctx) => {
  return await updateApplication(ctx.params.applicationId, ctx.request.body)
})

/**
 * Load application
 */
router.get('/:applicationId', async (ctx) => {
  return await getApplication(ctx.params.applicationId)
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
