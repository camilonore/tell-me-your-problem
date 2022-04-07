import Aside from '../components/Aside/Aside'
import Layout from '../styles/Layout.module.css'
import buttonStyles from '../components/Button/Button.module.css'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { PostsContainer } from '../components/PostsContainer/PostsContainer'
import Pencil from '../icons/Pencil'

export default function Home () {
  const { data: session } = useSession()

  return (
    <>
      <main className={Layout.layoutIndex} style={{ gridTemplateRows: session ? '30px 1fr' : 'none' }}>
        {session && (
          <Link href={'/post/newPost'} passHref>
            <a className={buttonStyles.button}>
              <Pencil width={15}/>
              New Post
            </a>
          </Link>
        )}
        <PostsContainer/>
        <Aside />
      </main>
    </>
  )
}
