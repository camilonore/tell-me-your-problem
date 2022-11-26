import { connectToDatabase } from '../../../services/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'
import { getPostById } from '../../../models/post/actions'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    await connectToDatabase()
    const { id } = req.query
    const post = await getPostById(id)
    if (post instanceof Error) {
      const error = `${post.name}: ${post.message}`
      return responseError(res, post.message, 400, error)
    }
    return responseSuccess(res, post, 200)
  } else {
    return responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
