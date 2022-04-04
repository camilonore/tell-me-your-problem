import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import { Header } from '../components/Header/Header'
import Layout from '../styles/Layout.module.css'
import buttonStyles from '../components/Button/Button.module.css'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Posts } from '../components/Posts/Posts'

export default function Home () {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>TMYP - Tell Me Your Problem</title>
        <meta name='description' content='TMYP - Tell Me Your Problem' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main className={Layout.layoutIndex} style={{ gridTemplateRows: session ? '30px 1fr' : 'none' }}>
        {session && (
          <Link href={'/post/newPost'} passHref>
            <a className={buttonStyles.button}>
              <Image src={'/pencil.svg'} width={18} height={18} alt='' />
              New Post
            </a>
          </Link>
        )}
        <Posts/>
        <Aside />
      </main>
    </>
  )
}
