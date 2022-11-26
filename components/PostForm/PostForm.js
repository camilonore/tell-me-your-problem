import { doPost } from '../../services/doPost'
import { Button } from '../Button/Button'
import { useSession } from 'next-auth/react'
import Router from 'next/router'
import { useState } from 'react'
import styles from './PostForm.module.css'
// TODO: check if error
// TODO: get values from form (abstraction)
// TODO: Class for request
function PostForm () {
  const { data: session } = useSession()
  const [disabled, setDisabled] = useState(false)
  const handleSubmit = (evt) => {
    setDisabled(true)
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const body = {
      author: session.user.userId,
      body: { ...data },
      date: new Date(Date.now())
    }
    doPost('/api/post', body).then(post => {
      if (post.error === '') {
        Router.push('/')
      }
    })
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type='text' placeholder='Title...' className={styles.title} name='title' required/>
      <textarea placeholder='Text' className={styles.text} name='text' required />
      <Button disabled={disabled}>Post it!</Button>
    </form>
  )
}
export { PostForm }
