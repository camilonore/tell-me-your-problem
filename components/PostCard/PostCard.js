import styles from './PostCard.module.css'
import { PostHeader } from '../PostHeader/PostHeader'
import { Message } from '../../icons/Message'
import { Heart } from '../../icons/Heart'
import { Button } from '../Button/Button'
import { doPost } from '../../services/doPost'
import { doDelete } from '../../services/doDelete'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

// TODO: Refactor!
// TODO: Add asynchronysm
const PostCard = ({ post }) => {
  const [disabled, setDisabled] = useState(false)
  const { data: session } = useSession()
  const isLiked = post.likes.indexOf(parseInt(session.user.userId))
  const [like, setLike] = useState(isLiked)
  const [numOfLikes, setNumOfLikes] = useState(post.likes.length)

  const handleClick = (evt) => {
    evt.preventDefault()
    if (like !== -1) {
      setDisabled(true)
      doDelete('/api/post/like', {
        id: post._id,
        author: session.user.userId
      }).then(() => {
        setLike(-1)
        setNumOfLikes(numOfLikes - 1)
        setDisabled(false)
      })
      return false
    } else {
      setDisabled(true)
      doPost('/api/post/like', {
        id: post._id,
        author: session.user.userId
      }).then(() => {
        setDisabled(false)
        setLike(true)
        setNumOfLikes(numOfLikes + 1)
      })
    }
  }
  return (
      <section className={styles.card}>
        <PostHeader {...post}/>
        <h3 className={styles.h3}>{post.body.title}</h3>
        <p>{post.body.text}</p>
        <footer className={styles.footer}>
          <span>
            <Message width={18} height={18}/>
            {post.comments.length}
          </span>
          <span>
            <Button onClick={handleClick} disabled={disabled}>
              <Heart width={18} height={18} fill={like !== -1 ? 'red' : 'none'}/>
              {numOfLikes}
            </Button>
          </span>
        </footer>
      </section>
  )
}

export { PostCard }
