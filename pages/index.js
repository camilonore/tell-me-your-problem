import Head from 'next/head'
import Aside from '../components/Aside/Aside'
import Card from '../components/Card/Card'
import { Header } from '../components/Header/Header'
import styles from '../styles/index.module.css'
import { postsMock } from '../mocks/postsMock'
import { Button } from '../components/Button/Button'
import Image from 'next/image'

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
      <Button onClick={() => console.log('new post')}>
        <Image src={'/pencil.svg'} width={18} height={18} alt=''/>
        New Post
      </Button>
        {
          postsMock.map(post => {
            return <Card
              key={post.id}
              id={post.id}
              author={post.author}
              post={post.post}
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
