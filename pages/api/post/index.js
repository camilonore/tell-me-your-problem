import { connectToDatabase } from '../../../Utils/connectDb'
import { CommentModel } from '../../../models/comment/comment'
import { responseSuccess } from '../../../Utils/responses'
import { getAllPosts, newPost } from '../../../models/post/actions'
import { findOneUser } from '../../../models/user/actions'

// TODO: Check if data is valid, user shouldn't create empty values
// TODO: Implement Likes
// TODO: Serialize data in a component
// TODO: Handle errors
// TODO: Max length in the responses

export default async function handler (req, res) {
  if (req.method === 'POST') {
    await connectToDatabase()
    const { _id } = await findOneUser(req.body.author)
    const serializedData = {
      ...req.body,
      author: _id
    }
    const createdPost = newPost(serializedData)
    return responseSuccess(res, createdPost, 200)
  }
  if (req.method === 'GET') {
    await connectToDatabase()
    CommentModel() // TODO: Solve this
    const posts = await getAllPosts()
    return responseSuccess(res, posts, 200)
  }
}
