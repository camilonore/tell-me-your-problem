import { PostHeader } from '../PostHeader/PostHeader'
import styles from './PostComment.module.css'

function PostComment ({ comment }) {
  return (
    <div className={styles.comment}>
      <PostHeader {...comment}/>
      <p>{comment.body}</p>
    </div>

  )
}
export { PostComment }
