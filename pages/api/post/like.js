import { connectToDatabase } from '../../../services/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'
import {
  findPostByIdAndUpdate,
  getPostById
} from '../../../models/post/actions'
import { getSession } from 'next-auth/react'

export default async function like (req, res) {
  if (req.method === 'POST') {
    const session = await getSession({ req })
    if (!session) {
      const error = 'Unauthorized'
      return responseError(res, error, 401, error)
    }
    await connectToDatabase()
    const { id } = req.body
    const { author } = req.body

    const updatedPost = await findPostByIdAndUpdate(
      id,
      { $push: { likes: [author] } },
      { new: false }
    )
    return responseSuccess(res, updatedPost, 200)
  } else if (req.method === 'DELETE') {
    await connectToDatabase()
    const { id } = req.body
    const { author } = req.body

    const post = await getPostById(id)
    const index = post.likes.indexOf(author)
    const update = post.likes.splice(index, 1)

    const updatedPost = await findPostByIdAndUpdate(id, {
      ...post,
      likes: update
    })
    return responseSuccess(res, updatedPost, 200)
  } else {
    return responseError(
      res,
      'Only POST/DELETE requests are allowed',
      400,
      'Invalid request'
    )
  }
}
