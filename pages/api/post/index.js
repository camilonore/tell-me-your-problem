import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { responseSuccess, responseError } from '../../../Utils/responses'
import { isEmpty } from '../../../Utils/isEmpty'

export default async function handler (req, res) {
  // TODO: Check if the user exists
  // TODO: Cache the data
  if (req.method === 'POST') {
    if (isEmpty({ ...req.body })) {
      responseError(res, 'Invalid data', 400, 'Incomplete data')
    } else {
      await connectToDatabase()
      const newPost = new PostModel({ ...req.body })
      const createdPost = await newPost.save((err) => {
        if (err) responseError(res, 'Invalid data', 400, err)
      })
      responseSuccess(res, createdPost, 200)
    }
  }
  if (req.method === 'GET') {
    await connectToDatabase()
    PostModel.find({})
      .populate('author')
      .exec((err, populatedData) => {
        if (err) {
          responseError(res, 'Internal error', 400, err)
        }
        responseSuccess(res, populatedData, 200)
      })
  }
}
