import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  userId: {
    type: Number,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  }
})

const UserModel = models.User || model('User', userSchema)

export { UserModel }
