import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { UserModel } from '../../../models/user'
import { CommentModel } from '../../../models/comment'
import { responseError, responseSuccess } from '../../../Utils/responses'

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
    CommentModel()
    PostModel.find({})
      .populate('comments')
      .populate('author')
      .exec((err, posts) => {
        if (err) responseError(res, 'Internal error', 500, err)
        responseSuccess(res, posts, 200)
      })
  }
}
