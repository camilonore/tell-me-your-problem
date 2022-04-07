import { CommentModel } from './comment'

async function newComment (comment) {
  try {
    const newComment = new CommentModel({ ...comment })
    return await newComment.save()
  } catch (error) {
    return error
  }
}

export { newComment }
