import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { UserModel } from '../../../models/user'
import { CommentModel } from '../../../models/comment'
import { responseError, responseSuccess } from '../../../Utils/responses'

// TODO: Cache the data
// TODO: Check if data is valid, user shouldn't create empty values
// TODO: Implement Likes
// TODO: Serialize data in a component

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
      .sort({ date: -1 })
      .exec()
      .then(posts => {
        responseSuccess(res, posts, 200)
      }).catch(err => {
        responseError(res, 'Internal error', 500, err)
      })
  }
}
