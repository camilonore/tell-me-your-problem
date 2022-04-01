import { connectToDatabase } from '../../../Utils/connectDb'
import { PostModel } from '../../../models/post'
import { responseSuccess, responseError } from '../../../Utils/responses'
import { isEmpty } from '../../../Utils/isEmpty'

export default function handler (req, res) {
  // TODO: Check if the user exists
  // TODO: Cache the data
  if (req.method === 'POST') {
    if (isEmpty({ ...req.body })) {
      responseError(res, 'Check your data', 400, 'Incomplete data')
    } else {
      (async () => {
        await connectToDatabase()
        const newPost = new PostModel({ ...req.body })
        await newPost.save()
        PostModel.find({})
          .populate('author')
          .exec((err, populatedData) => {
            if (err) {
              responseError(res, 'Internal error', 400, err)
            }
            responseSuccess(res, populatedData, 200)
          })
      })()
    }
  }
  if (req.method === 'GET') {
    (async () => {
      await connectToDatabase()
      PostModel.find({})
        .populate('author')
        .exec((err, populatedData) => {
          if (err) {
            responseError(res, 'Internal error', 400, err)
          }
          responseSuccess(res, populatedData, 200)
        })
    })()
  }
}
