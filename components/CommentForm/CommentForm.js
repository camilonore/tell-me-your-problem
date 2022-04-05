import { Button } from '../Button/Button'
import { useState, useContext } from 'react'
import { doPost } from '../../Utils/doPost'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import styles from './CommentForm.module.css'
import { PostContext } from '../../context/PostContext'

function CommentForm () {
  const [disabled, setDisabled] = useState(false)
  const { setPost } = useContext(PostContext)
  const { data: session } = useSession()

  const handleSubmit = (evt) => {
    setDisabled(true)
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const body = {
      ...data,
      author: session.user.userId,
      date: new Date(Date.now()),
      postReference: Router.query.id
    }
    doPost('/api/comment', body).then((post) => {
      evt.target.body.value = ''
      setPost({ ...post.body })
      setDisabled(false)
    })
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea type="text" className={styles.input} name='body' required/>
      <Button disabled={disabled}>
        Comment!
      </Button>
    </form>
  )
}

export { CommentForm }
