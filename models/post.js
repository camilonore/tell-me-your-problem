import { Schema, model, models } from 'mongoose'
const postSchema = new Schema({
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

const PostModel = models.Post || model('Post', postSchema)

export { PostModel }
