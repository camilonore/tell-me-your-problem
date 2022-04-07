import { UserModel } from './user'

// TODO: Get Users
// TODO: Popular Users
async function newUser (user) {
  try {
    const newUser = new UserModel(user)
    return await newUser.save()
  } catch (error) {
    return error
  }
}
async function findOneUser (userId) {
  try {
    const user = await UserModel.findOne({
      userId: userId
    })
    return user
  } catch (error) {
    return error
  }
}

export { newUser, findOneUser }
