import { connectToDatabase } from '../../../Utils/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'
import { findPostByIdAndUpdate } from '../../../models/post/actions'
import { newComment } from '../../../models/comment/actions'
import { findOneUser } from '../../../models/user/actions'

// TODO: Extract Validations

export default async function handler (req, res) {
  if (req.method === 'POST') {
    if (!req.body.postReference) {
      const error = 'The postReference is required'
      return responseError(res, error, 400, error)
    }
    await connectToDatabase()
    const user = await findOneUser(req.body.author)
    if (user === null) {
      const error = 'Invalid User'
      return responseError(res, error, 400, error)
    }
    const serializedData = {
      ...req.body,
      author: await user._id
    }
    const savedComment = await newComment(serializedData)
    if (savedComment instanceof Error) {
      const error = `${savedComment.name}: ${savedComment.message}`
      return responseError(res, savedComment.message, 400, error)
    }
    const { postReference } = req.body
    const update = {
      $push: { comments: [savedComment._id] }
    }
    const posts = await findPostByIdAndUpdate(postReference, update)
    if (posts instanceof Error) {
      const error = `${posts.name}: ${posts.message}`
      return responseError(res, posts.message, 400, error)
    }
    return responseSuccess(res, posts, 200)
  } else {
    return responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
