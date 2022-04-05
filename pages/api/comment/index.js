import { connectToDatabase } from '../../../Utils/connectDb'
import { CommentModel } from '../../../models/comment'
import { UserModel } from '../../../models/user'
import { PostModel } from '../../../models/post'
import { responseError, responseSuccess } from '../../../Utils/responses'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const { _id } = await UserModel.findOne({ userId: req.body.author })
    const serializedData = {
      ...req.body,
      author: _id
    }
    const newComment = new CommentModel({ ...serializedData })
    const savedComment = await newComment.save()
    const { postReference } = req.body
    const update = {
      $push: { comments: [savedComment._id] }
    }
    PostModel.findByIdAndUpdate(postReference, update, { returnDocument: 'after' })
      .populate('comments')
      .populate({
        path: 'comments',
        populate: {
          path: 'author'
        },
        options: {
          sort: {
            date: -1
          }
        }
      })
      .populate('author')
      .exec()
      .then(posts => {
        responseSuccess(res, posts, 200)
      }).catch(err => {
        responseError(res, 'Check your data', 400, err)
      })
  } else {
    responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
