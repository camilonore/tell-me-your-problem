import styles from './Card.module.css'
import Link from 'next/link'
const Card = ({ img, author, time, comments, likes }) => {
  return (
    <section className={styles.card} >
      <header className={styles.header} >
        <img src={img} alt={author} className={styles.image}/>
        <p className={styles.details}>
          {author} • <label className={styles.time}>{time}</label>
        </p>
      </header>
      <p>lorem ipsum dolor</p>
      <footer className={styles.footer}>
        <Link href='https://google.com'>
          <a>📝 {comments} Comments</a>
        </Link>
        <Link href='https://google.com'>
          <a>♥ {likes} Likes</a>
        </Link>
      </footer>
    </section>
  )
}

export default Card
