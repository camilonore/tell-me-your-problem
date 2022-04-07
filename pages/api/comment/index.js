import { connectToDatabase } from '../../../Utils/connectDb'
import { UserModel } from '../../../models/user/user'
import { responseError, responseSuccess } from '../../../Utils/responses'
import { findPostByIdAndUpdate } from '../../../models/post/actions'
import { newComment } from '../../../models/comment/actions'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const { _id } = await UserModel.findOne({ userId: req.body.author })
    const serializedData = {
      ...req.body,
      author: _id
    }
    const savedComment = await newComment(serializedData)
    const { postReference } = req.body
    const update = {
      $push: { comments: [savedComment._id] }
    }
    const posts = await findPostByIdAndUpdate(postReference, update)
    responseSuccess(res, posts, 200)
  } else {
    responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
