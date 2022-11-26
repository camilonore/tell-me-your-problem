import { UserModel } from './user'

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
async function getPopularUsers () {
  try {
    const users = await UserModel.find({})
      .limit(5)
    return users
  } catch (error) {
    return error
  }
}

export { newUser, findOneUser, getPopularUsers }
