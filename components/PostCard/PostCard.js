import styles from './PostCard.module.css'
import { PostHeader } from '../PostHeader/PostHeader'
import { Message } from '../../icons/Message'
import { Heart } from '../../icons/Heart'
const PostCard = ({ post }) => {
  return (
      <section className={styles.card}>
        <PostHeader {...post}/>
        <h3 className={styles.h3}>{post.body.title}</h3>
        <p>{post.body.text}</p>
        <footer className={styles.footer}>
          <span>
            <Message width={18} height={18}/>
            {post.comments.length}
          </span>
          <span>
            <Heart width={18} height={18}/>
            {'0'}
          </span>
        </footer>
      </section>
  )
}

export { PostCard }
