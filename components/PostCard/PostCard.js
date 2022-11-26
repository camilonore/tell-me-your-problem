import styles from './PostCard.module.css'
import { PostHeader } from '../PostHeader/PostHeader'
import { Message } from '../../icons/Message'
import { Heart } from '../../icons/Heart'
import { Button } from '../Button/Button'
import { useLike } from '../../hooks/useLike'

const PostCard = ({ post }) => {
  const { isLiked, numOfLikes, handleClick } = useLike(post.likes, post._id)
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
            <Button onClick={handleClick}>
              <Heart width={18} height={18} fill={isLiked ? 'red' : 'none'}/>
              {numOfLikes}
            </Button>
          </span>
        </footer>
      </section>
  )
}

export { PostCard }
