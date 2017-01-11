import mongoose from '../stores/mongoose'
import { Schema } from 'mongoose'

const applicationSchema = new mongoose.Schema({
  name: String,
  categoryId: Schema.Types.ObjectId,
  score: { type: Number, default: 0 },
  developerName: String,
  description: String,
  versions: [{
    version: String,
    changelog: String,
    publishDate: Date
  }],
  screenshots: [String],
  qrcode: String
}, {
  versionKey: false
})

const Application = mongoose.model('Application', applicationSchema)

export default Application
