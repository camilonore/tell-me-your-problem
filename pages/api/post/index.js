import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { responseSuccess } from '../../../Utils/responses'
// TODO: Check if the user exists
// TODO: Cache the data
// TODO: Check if data is valid, user shouldn't create empty values

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const newPost = new PostModel({ ...req.body })
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
