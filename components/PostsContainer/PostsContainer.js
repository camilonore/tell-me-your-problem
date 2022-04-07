import Link from 'next/link'
import { usePosts } from '../../hooks/usePosts'
import { PostCard } from '../PostCard/PostCard'
import styles from './PostsContainer.module.css'
import { Loading } from '../Loading/Loading'

const PostsContainer = () => {
  const { posts, loading } = usePosts('/api/post')
  return (
    <section className={styles.container}>
      {loading
        ? <Loading/>
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
    </section>
  )
}

export { PostsContainer }
