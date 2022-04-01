import { Schema, model, models } from 'mongoose'

const userSchema = new Schema({
  username: String,
  img: String
})

const UserModel = models.User || model('User', userSchema)

export { UserModel }
