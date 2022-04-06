import { useRouter } from 'next/router'

export default function User () {
  const router = useRouter()
  const { id } = router.query
  return (
    <h2>{id}</h2>
  )
}
