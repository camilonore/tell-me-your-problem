import { connectToDatabase } from '../../../Utils/connectDb'
import { CommentModel } from '../../../models/comment'
import { responseSuccess, responseError } from '../../../Utils/responses'
import { isEmpty } from '../../../Utils/isEmpty'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    if (isEmpty({ ...req.body })) {
      responseError(res, 'Invalid data', 400, 'Incomplete data')
    } else {
      await connectToDatabase()
      const newComment = new CommentModel({ ...req.body })
      const savedComment = await newComment.save((err) => {
        if (err) responseError(res, 'Invalid data', 400, err)
      })
      responseSuccess(res, savedComment, 200)
    }
  }
}
