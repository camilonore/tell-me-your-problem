import { PostForm } from '../../components/PostForm/PostForm'
import { PostHelper } from '../../components/PostHelper/PostHelper'
import styles from './newPost.module.css'
import Layout from '../../styles/Layout.module.css'

export default function NewPost () {
  return (
    <>
      <main className={Layout.layoutPost}>
        <h2 className={styles.h2}>Create a new Post</h2>
        <PostForm/>
        <PostHelper/>
      </main>
    </>
  )
}
