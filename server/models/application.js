import mongoose from '../stores/mongoose'
import { Schema } from 'mongoose'

const applicationSchema = new Schema({
  icon: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 16
  },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  totalVote: { type: Number, default: 0 },
  voteCount: { type: Number, default: 0 },
  developerName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 16
  },
  description: {
    type: String,
    required: true
  },
  versions: [{
    version: {
      type: String,
      required: true
    },
    changelog: {
      type: String,
      required: true
    },
    publishDate: Date
  }],
  screenshots: [String],
  qrcode: {
    type: String,
    required: true
  }
}, {
  versionKey: false
})

const Application = mongoose.model('Application', applicationSchema)

export default Application
