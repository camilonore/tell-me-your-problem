import styles from './Card.module.css'
import Link from 'next/link'
const Card = ({ id, img, author, post, time, comments, likes }) => {
  return (
    <Link href={'/post/' + id}>
      <section className={styles.card}>
        <header className={styles.header}>
          <img src={img} alt={author} className={styles.image} />
          <Link href={'/p/' + author}>
            <a className={styles.author}>{author}</a>
          </Link>
          <label className={styles.time}>• {time}</label>
        </header>
        <p>{post}</p>
        <footer className={styles.footer}>
          <a>📝 {comments} Comments</a>
          <a>♥ {likes} Likes</a>
        </footer>
      </section>
    </Link>
  )
}

export default Card
