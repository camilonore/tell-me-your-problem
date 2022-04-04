import { PostModel } from '../../../models/post'
import { CommentModel } from '../../../models/comment'
import { connectToDatabase } from '../../../Utils/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    await connectToDatabase()
    CommentModel()
    PostModel.findById(id)
      .populate('comments')
      .populate({
        path: 'comments',
        populate: {
          path: 'author'
        }
      })
      .populate('author')
      .exec((err, posts) => {
        if (err) responseError(res, 'Internal error', 500, err)
        responseSuccess(res, posts, 200)
      })
  } else {
    responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
