import { Schema, model, models } from 'mongoose'

const commentSchema = new Schema({
  postReference: {
    type: Schema.ObjectId,
    ref: 'Comment',
    required: true
  },
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
