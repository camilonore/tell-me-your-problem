import { Schema, model, models } from 'mongoose'

const commentSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  body: String
})

const CommentModel = models.Comment || model('Comment', commentSchema)

export { CommentModel }
