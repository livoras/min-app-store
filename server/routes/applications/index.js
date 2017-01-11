import Router from '../../utils/router'
import validate from '../../utils/validate'
import Joi from 'joi'
import { createApplication, deleteApplication } from '../../services/application'

const router = new Router()

/**
 * Create application
 */
router.post('/', async (ctx) => {
  const schema = Joi.object().keys({
    name: Joi.string().min(2).max(16).required(),
    developerName: Joi.string().min(2).max(16).required(),
    description: Joi.string().required(),
    qrcode: Joi.string().required()
  })
  const { body } = ctx.request
  validate(body, schema)
  return await createApplication(body)
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
})

/**
 * Load application
 */
router.get('/:applicationId', async (ctx) => {
})

export default router
