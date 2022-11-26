import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { doDelete } from '../services/doDelete'
import { doPost } from '../services/doPost'
import { useRouter } from 'next/router'

function useLike (likes, postId) {
  const { data: session, status } = useSession()
  const [isLiked, setIsLiked] = useState(false)
  const [numOfLikes, setNumOfLikes] = useState(likes.length)
  const [authenticated, setAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      setAuthenticated(true)
      const index = likes.indexOf(parseInt(session.user.userId))
      if (index !== -1) {
        setIsLiked(true)
      }
    }
  }, [likes, session?.user?.userId, status])

  const handleClick = (evt) => {
    evt.preventDefault()
    if (!authenticated) {
      router.push(`${process.env.NEXT_PUBLIC_URL}/api/auth/signin`)
      return
    }
    setIsLiked(!isLiked)
    const url = '/api/post/like'
    const body = {
      id: postId,
      author: session.user.userId
    }
    if (isLiked) {
      setNumOfLikes(numOfLikes - 1)
      doDelete(url, body)
        .catch(() => {
          setIsLiked(!isLiked)
          setNumOfLikes(numOfLikes + 1)
        })
    } else {
      setNumOfLikes(numOfLikes + 1)
      doPost(url, body)
        .catch(() => {
          setIsLiked(!isLiked)
          setNumOfLikes(numOfLikes - 1)
        })
    }
  }

  return { isLiked, numOfLikes, handleClick }
}

export { useLike }
