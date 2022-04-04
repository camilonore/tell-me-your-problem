import styles from './PostHeader.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { normalizeDate } from '../../Utils/normalizeDate'

function PostHeader (post) {
  return (
    <header className={styles.header}>
    <Image
      width={40}
      height={40}
      src={post.author.img}
      alt={post.author.username}
      className={styles.image}
    />
    <Link href={'/profile/' + post.author.username}>
      <a className={styles.author}>{post.author.username}</a>
    </Link>
    <label className={styles.time}>•</label>
    <label className={styles.time}>{normalizeDate(post.date)}</label>
  </header>
  )
}
export { PostHeader }
