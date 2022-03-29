import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Card from '../components/Card/Card'
import { Header } from '../components/Header/Header'
import styles from '../styles/index.module.css'
import { postsMock } from '../Mocks/postsMock'

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
        {
          postsMock.map(post => {
            return <Card
              key={post.id}
              author={post.author}
              img={post.img}
              time={post.time}
              comments={post.comments}
              likes={post.likes}
            />
          })
        }
      <Aside/>
      </main>
    </>
  )
}
