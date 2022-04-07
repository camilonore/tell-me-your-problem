import { UserModel } from './user'

async function newUser (user) {
  const newUser = new UserModel(user)
  return await newUser.save()
}
async function findOneUser (userId) {
  const user = await UserModel.findOne({
    userId: userId
  })
  return user
}

export { newUser, findOneUser }
