import Link from 'next/link'
import { usePosts } from '../../hooks/usePosts'
import { PostCard } from '../PostCard/PostCard'
import styles from './PostsContainer.module.css'

const PostsContainer = () => {
  const { posts, loading } = usePosts('/api/post')
  return (
    <>
      {loading
        ? (
        <h2>Loading...</h2>
          )
        : (
            posts.map((post) => {
              return (
            <Link href={'/post/' + post._id} passHref key={post._id}>
              <a className={styles.a}>
                <PostCard post={{ ...post }} />
              </a>
            </Link>
              )
            })
          )}
    </>
  )
}

export { PostsContainer }
