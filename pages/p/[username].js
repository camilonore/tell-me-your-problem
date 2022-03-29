import { useRouter } from 'next/router'
import { Header } from '../../components/Header/Header'

export default function Profile () {
  const router = useRouter()
  const { username } = router.query

  return (
    <>
      <Header/>
      <h1>{username}</h1>
    </>
  )
}
