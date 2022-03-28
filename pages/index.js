import Head from 'next/head'
import Card from '../components/Card/Card'
import { Header } from '../components/Header/Header'
import styles from '../styles/index.module.css'

export default function Home () {
  return (
    <>
      <Head>
        <title>TMYP - Tell Me Your Problem</title>
        <meta name="description" content="TMYP - Tell Me Your Problem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <Card
          author={'@CamiloNore'}
          img={'https://picsum.photos/200'}
          time={'5 hours ago'}
          comments={'50'}
          likes={50}
        />
      </main>
    </>
  )
}
