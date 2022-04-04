import { Header } from '../../components/Header/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { doGet } from '../../Utils/doGet'
import { PostCard } from '../../components/PostCard/PostCard'
import { PostComment } from '../../components/PostComment/PostComment'
import styles from './PostById.module.css'

export default function PostById () {
  const router = useRouter()
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    const { id } = router.query
    if (id) {
      doGet(`/api/post/${id}`).then((data) => {
        setPost(data)
        setLoading(false)
      })
    }
  }, [router.query])

  return (
    <>
      <Header />
      <main className={styles.main}>
        {loading ? <h1>Loading...</h1> : <PostCard post={{ ...post }}/>}
        {!loading &&
          post.comments.length >= 1 &&
          post.comments.map((comment) => {
            return <PostComment comment={comment} key={comment._id} />
          })}
      </main>
    </>
  )
}
