import mongoose from 'mongoose'

const { Schema } = mongoose

const interactionSchema = new Schema({
  type: String,
  userAgent: String,
  ip: String
}, {
  timestamps: true
})

export default mongoose.model('Interaction', interactionSchema)
