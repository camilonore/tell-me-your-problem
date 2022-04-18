import Link from 'next/link'
import { PostCard } from '../PostCard/PostCard'
import styles from './PostsContainer.module.css'

const PostsContainer = ({ posts }) => {
  return (
    <section className={styles.container}>
      {posts.map((post) => {
        return (
          <Link href={'/post/' + post._id} passHref key={post._id}>
            <a className={styles.a}>
              <PostCard post={{ ...post }} />
            </a>
          </Link>
        )
      })}
    </section>
  )
}

export { PostsContainer }
