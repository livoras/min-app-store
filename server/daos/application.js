import mongoose from '../stores/mongoose'

const applicationSchema = new mongoose.Schema({
  name: String
})

const Application = mongoose.model('Application', applicationSchema)

export default Application
