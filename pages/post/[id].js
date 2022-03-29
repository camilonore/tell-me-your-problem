import { Header } from '../../components/Header/Header'
import { useRouter } from 'next/router'

export default function Post () {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Header/>
      <h1>{id}</h1>
    </>
  )
}
