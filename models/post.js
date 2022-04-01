import { Schema, model, models } from 'mongoose'

const postSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  body: String,
  comments: {
    type: Schema.ObjectId,
    ref: 'Comment'
  },
  date: {
    type: Date,
    default: Date.now
  },
  likes: Number
})

const PostModel = models.Post || model('Post', postSchema)

export { PostModel }
