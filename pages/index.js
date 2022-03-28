import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>TMYP - Tell Me Your Problem</title>
        <meta name="description" content="TMYP - Tell Me Your Problem" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
