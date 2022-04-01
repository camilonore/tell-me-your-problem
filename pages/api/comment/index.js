import { connectToDatabase } from '../../../Utils/connectDb'
import { CommentModel } from '../../../models/comment'
import { PostModel } from '../../../models/post'
import { responseSuccess } from '../../../Utils/responses'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const newComment = new CommentModel({ ...req.body })
    const savedComment = await newComment.save()
    const { postReference } = req.body
    const update = {
      $push: { comments: [savedComment._id] }
    }
    await PostModel.findByIdAndUpdate(postReference, update)
    responseSuccess(res, savedComment, 200)
  }
}
