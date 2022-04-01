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
  }
})

const CommentModel = models.Comment || model('Comment', commentSchema)

export { CommentModel }
