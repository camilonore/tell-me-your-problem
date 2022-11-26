import { useEffect, useState } from 'react'
import { doGet } from '../services/doGet'

function usePosts (url) {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    setLoading(true)
    doGet(url).then((posts) => {
      setPosts(posts)
      setLoading(false)
    })
  }, [url])
  return { loading, setLoading, posts, setPosts }
}

export { usePosts }
