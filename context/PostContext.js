import { createContext, useState, useEffect } from 'react'
import { doGet } from '../services/doGet'

const PostContext = createContext()

function PostProvider ({ children }) {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setLoading(true)
    if (query !== '') {
      doGet(`/api/post/${query}`)
        .then((data) => {
          setPost(data)
          setError(false)
          setLoading(false)
        })
        .catch(() => {
          setError(true)
          setPost({})
          setLoading(false)
        })
    }
  }, [query])

  return (
    <PostContext.Provider value={{
      post,
      setPost,
      loading,
      error,
      setError,
      setLoading,
      query,
      setQuery
    }}>
      {children}
    </PostContext.Provider>
  )
}

export { PostContext, PostProvider }
