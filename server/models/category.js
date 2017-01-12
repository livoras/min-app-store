import mongoose from '../stores/mongoose'
import { Schema } from 'mongoose'

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 16,
    unique: true
  }
}, {
  versionKey: false
})

export default mongoose.model('Category', categorySchema)
