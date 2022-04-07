import { connectToDatabase } from '../../../Utils/connectDb'
import { responseError, responseSuccess } from '../../../Utils/responses'
import { getPostById } from '../../../models/post/actions'

export default async function handler (req, res) {
  if (req.method === 'GET') {
    const { id } = req.query
    await connectToDatabase()
    const post = await getPostById(id)
    responseSuccess(res, post, 200)
  } else {
    responseError(res, 'Only POST requests are allowed', 400, 'Invalid request')
  }
}
