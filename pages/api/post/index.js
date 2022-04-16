import { connectToDatabase } from '../../../services/connectDb'
import { responseSuccess, responseError } from '../../../Utils/responses'
import { getAllPosts, newPost } from '../../../models/post/actions'
import { findOneUser } from '../../../models/user/actions'
import { getSession } from 'next-auth/react'

export default async function handler (req, res) {
  if (req.method === 'POST') {
    const session = await getSession({ req })
    if (!session) {
      const error = 'Unauthorized'
      return responseError(res, error, 401, error)
    }
    await connectToDatabase()
    const user = await findOneUser(req.body.author)
    if (user === null) {
      const error = 'Invalid author'
      return responseError(res, error, 400, error)
    }
    const serializedData = {
      ...req.body,
      author: await user._id
    }
    const createdPost = await newPost(serializedData)
    if (createdPost instanceof Error) {
      const error = `${createdPost.name}: ${createdPost.message}`
      return responseError(res, createdPost.message, 400, error)
    }
    return responseSuccess(res, createdPost, 200)
  }
  if (req.method === 'GET') {
    await connectToDatabase()
    const posts = await getAllPosts()
    if (posts instanceof Error) {
      const error = `${posts.name}: ${posts.message}`
      return responseError(res, posts.message, 400, error)
    }
    return responseSuccess(res, posts, 200)
  }
}
