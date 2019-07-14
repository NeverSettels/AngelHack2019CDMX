const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MessageSchema = Schema(
  {
    content: String
  },
  {
    timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' }
  }
)

const Message = mongoose.model('Message', MessageSchema)

module.exports = Message
