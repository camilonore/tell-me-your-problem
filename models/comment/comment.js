import { Schema, model, models } from 'mongoose'

const commentSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const CommentModel = models.Comment || model('Comment', commentSchema)

export { CommentModel }
