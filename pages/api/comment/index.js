import { connectToDatabase } from '../../../Utils/connectDb'
import { CommentModel } from '../../../models/comment'
import { responseSuccess, responseError } from '../../../Utils/responses'
import { isEmpty } from '../../../Utils/isEmpty'

export default function handler (req, res) {
  if (req.method === 'POST') {
    if (isEmpty({ ...req.body })) {
      responseError(res, 'Check your data', 400, 'Incomplete data')
    } else {
      (async () => {
        await connectToDatabase()
        const newComment = new CommentModel({ ...req.body })
        await newComment.save()
        CommentModel.find({})
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
}
