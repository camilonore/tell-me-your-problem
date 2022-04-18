import Aside from '../components/Aside/Aside'
import Layout from '../styles/Layout.module.css'
import buttonStyles from '../components/Button/Button.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { PostsContainer } from '../components/PostsContainer/PostsContainer'
import { Pencil } from '../icons/Pencil'
import { connectToDatabase } from '../services/connectDb'
import { getAllPosts } from '../models/post/actions'
import { getPopularUsers } from '../models/user/actions'

export default function Home (props) {
  const posts = JSON.parse(props.posts)
  const users = JSON.parse(props.users)

  const { data: session } = useSession()
  // TODO: Button go top

  return (
    <>
      <main
        className={Layout.layoutIndex}
        style={{ gridTemplateRows: session ? '30px 1fr' : 'none' }}
      >
        {session && (
          <Link href={'/post/newPost'} passHref>
            <a className={buttonStyles.button}>
              <Pencil width={15} />
              New Post
            </a>
          </Link>
        )}
        <PostsContainer posts={posts} />
        <Aside users={users} />
      </main>
    </>
  )
}
export async function getServerSideProps (context) {
  await connectToDatabase()
  let posts = await getAllPosts()
  let users = await getPopularUsers()

  users = JSON.stringify(users)
  posts = JSON.stringify(posts)

  return {
    props: {
      posts: posts,
      users: users
    }
  }
}
