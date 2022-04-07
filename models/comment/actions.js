import { CommentModel } from './comment'

async function newComment (comment) {
  const newComment = new CommentModel({ ...comment })
  return await newComment.save()
}

export { newComment }
