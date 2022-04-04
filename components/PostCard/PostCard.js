import styles from './PostCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
const PostCard = ({ id, img, author, post, time, comments, likes }) => {
  return (
    <Link href={'/post/' + id} passHref>
      <section className={styles.card}>
        <header className={styles.header}>
          <Image
            width={40}
            height={40}
            src={img}
            alt={author}
            className={styles.image}
          />
          <Link href={'/profile/' + author}>
            <a className={styles.author}>{author}</a>
          </Link>
          <label className={styles.time}>• {time}</label>
        </header>
        <p>{post}</p>
        <footer className={styles.footer}>
          <span>
            <Image width={15} height={15} src='/message.svg' alt='messages' />
            {comments} Comments
          </span>
          <span>
            <Image width={15} height={15} src='/heart.svg' alt='heart' />
            {likes} Likes{' '}
          </span>
        </footer>
      </section>
    </Link>
  )
}

export { PostCard }
