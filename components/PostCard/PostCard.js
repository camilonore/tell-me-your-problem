import styles from './PostCard.module.css'
import Image from 'next/image'
import { PostHeader } from '../PostHeader/PostHeader'
const PostCard = ({ post }) => {
  return (
      <section className={styles.card}>
        <PostHeader {...post}/>
        <h3 className={styles.h3}>{post.body.title}</h3>
        <p>{post.body.text}</p>
        <footer className={styles.footer}>
          <span>
            <Image width={15} height={15} src='/message.svg' alt='messages' />
            {post.comments.length} Comments
          </span>
          <span>
            <Image width={15} height={15} src='/heart.svg' alt='heart' />
            {'0'} Likes{' '}
          </span>
        </footer>
      </section>
  )
}

export { PostCard }
