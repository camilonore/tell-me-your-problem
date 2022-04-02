import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { UserModel } from '../../../models/user'
import { responseSuccess } from '../../../Utils/responses'
// TODO: Check if the user exists
// TODO: Cache the data
// TODO: Check if data is valid, user shouldn't create empty values

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const { _id } = await UserModel.findOne({ userId: req.body.author })
    const serializedData = {
      ...req.body,
      author: _id
    }
    const newPost = new PostModel(serializedData)
    const createdPost = await newPost.save()
    responseSuccess(res, createdPost, 200)
  }
  if (req.method === 'GET') {
    await connectToDatabase()
    const foundedPosts = await PostModel.find({})
      .populate('author')
      .populate('comments')
    responseSuccess(res, foundedPosts, 200)
  }
}
