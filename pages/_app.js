import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { PostProvider } from '../context/PostContext'

export default function App ({
  Component,
  pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    </SessionProvider>
  )
}
