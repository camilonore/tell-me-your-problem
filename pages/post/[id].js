import { Header } from '../../components/Header/Header'
import { PostCard } from '../../components/PostCard/PostCard'
import { PostComment } from '../../components/PostComment/PostComment'
import { CommentForm } from '../../components/CommentForm/CommentForm'
import { PostContext } from '../../context/PostContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './PostById.module.css'

export default function PostById () {
  const router = useRouter()
  const {
    post,
    loading,
    setQuery
  } = useContext(PostContext)

  useEffect(() => {
    if (router.query.id) {
      setQuery(router.query.id)
    }
  }, [router.query.id, setQuery])

  return (
    <>
      <Header />
      <main className={styles.main}>
        {loading
          ? <h1>Loading...</h1>
          : <section className={styles.postSection}>
              <PostCard post={{ ...post }}/>
              <CommentForm/>
            </section>
        }
        {!loading &&
          post.comments.map((comment) => {
            return <PostComment comment={comment} key={comment._id} />
          })
        }
      </main>
    </>
  )
}
