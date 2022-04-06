import Aside from '../components/Aside/Aside'
import Layout from '../styles/Layout.module.css'
import buttonStyles from '../components/Button/Button.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { PostsContainer } from '../components/PostsContainer/PostsContainer'

export default function Home () {
  const { data: session } = useSession()

  return (
    <>
      <main className={Layout.layoutIndex} style={{ gridTemplateRows: session ? '30px 1fr' : 'none' }}>
        {session && (
          <Link href={'/post/newPost'} passHref>
            <a className={buttonStyles.button}>
              <Image src={'/pencil.svg'} width={18} height={18} alt='' />
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
