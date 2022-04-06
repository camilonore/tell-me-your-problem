import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { PostProvider } from '../context/PostContext'
import { Header } from '../components/Header/Header'
import Head from 'next/head'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <PostProvider>
        <Head>
          <title>TMYP - Tell Me Your Problem</title>
          <meta name='description' content='TMYP - Tell Me Your Problem' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Header/>
        <Component {...pageProps} />
      </PostProvider>
    </SessionProvider>
  )
}
