import { doPost } from '../../Utils/doPost'
import { Button } from '../Button/Button'
import { useSession } from 'next-auth/react'

import styles from './PostForm.module.css'
function PostForm () {
  const { data: session } = useSession()
  const handleSubmit = (evt) => {
    evt.preventDefault()
    const data = Object.fromEntries(new FormData(evt.target))
    const body = {
      author: session.user.userId,
      body: { ...data },
      date: new Date(Date.now())
    }
    doPost('/api/post', body)
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input type='text' placeholder='Title...' className={styles.title} name='title' required/>
      <textarea placeholder='Text' className={styles.text} name='text' required />
      <Button>Post it!</Button>
    </form>
  )
}
export { PostForm }
