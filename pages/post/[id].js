import { PostCard } from '../../components/PostCard/PostCard'
import { PostComment } from '../../components/PostComment/PostComment'
import { CommentForm } from '../../components/CommentForm/CommentForm'
import { useSession } from 'next-auth/react'
import { PostContext } from '../../context/PostContext'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from './PostById.module.css'
import { Loading } from '../../components/Loading/Loading'
import { NotFound } from '../../components/NotFound/NotFound'

export default function PostById () {
  const { data: session } = useSession()
  const router = useRouter()
  const {
    post,
    error,
    loading,
    setQuery
  } = useContext(PostContext)

  useEffect(() => {
    if (router.query.id) {
      setQuery(router.query.id)
    }
  }, [router.query.id, setQuery])

  function CanUserComment () {
    if (session) {
      return (
        <section className={styles.postSection}>
          <PostCard post={{ ...post }}/>
          <CommentForm/>
        </section>
      )
    }
    return (
      <section className={styles.postSection}>
        <PostCard post={{ ...post }}/>
      </section>
    )
  }
  return (
    <>
      <main className={styles.main}>
        {loading && <Loading/>}
        {!loading && error && <NotFound/>}
        {!loading && !error && <CanUserComment/>}
        {!loading && !error &&
          post.comments.map((comment) => {
            return <PostComment comment={comment} key={comment._id} />
          })
        }
      </main>
    </>
  )
}
