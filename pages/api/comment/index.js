import { connectToDatabase } from '../../../Utils/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'
import { findPostByIdAndUpdate } from '../../../models/post/actions'
import { newComment } from '../../../models/comment/actions'
import { findOneUser } from '../../../models/user/actions'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const { _id } = await findOneUser(req.body.author)
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
    return responseSuccess(res, posts, 200)
  } else {
    return responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
