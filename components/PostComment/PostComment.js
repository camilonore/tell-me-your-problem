import { PostHeader } from '../PostHeader/PostHeader'

function PostComment ({ comment }) {
  return (
    <div>
      <PostHeader {...comment}/>
      <p>{comment.body}</p>
    </div>

  )
}
export { PostComment }
