import { Schema, model, models } from 'mongoose'
const postSchema = new Schema({
  author: {
    type: Schema.ObjectId,
    ref: 'User',
    required: true
  },
  body: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  date: {
    type: Date,
    default: Date.now
  },
  comments: [
    {
      type: Schema.ObjectId,
      ref: 'Comment'
    }
  ],
  likes: [
    {
      type: Number
    }
  ]
})

const PostModel = models.Post || model('Post', postSchema)

export { PostModel }
