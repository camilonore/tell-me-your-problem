import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { responseSuccess, responseError } from '../../../Utils/responses'
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
    PostModel.find({})
      .populate('author')
      .populate('comments')
      .exec((err, populatedData) => {
        if (err) {
          responseError(res, 'Internal error', 400, err)
        }
        responseSuccess(res, populatedData, 200)
      })
  }
}
