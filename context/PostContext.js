import { createContext, useState, useEffect } from 'react'
import { doGet } from '../Utils/doGet'

const PostContext = createContext()

function PostProvider ({ children }) {
  const [post, setPost] = useState({})
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setLoading(true)
    if (query !== '') {
      doGet(`/api/post/${query}`).then((data) => {
        setPost(data)
        setLoading(false)
      })
    }
  }, [query])

  return (
    <PostContext.Provider value={{
      post,
      setPost,
      loading,
      setLoading,
      query,
      setQuery
    }}>
      {children}
    </PostContext.Provider>
  )
}

export { PostContext, PostProvider }
