import mongoose from '../stores/mongoose'
import { Schema } from 'mongoose'

const collectionSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 16,
    unique: true
  },
  isVisible: {
    type: Boolean,
    default: true
  },
  applications: [{
    type: Schema.Types.ObjectId,
    ref: 'Application'
  }],
  priority: {
    type: Number,
    default: 0
  }
}, {
  versionKey: false
})

export default mongoose.model('Collection', collectionSchema)
