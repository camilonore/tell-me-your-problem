import { useRouter } from 'next/router'

// TODO: User page -> Description, name, image
export default function User () {
  const router = useRouter()
  const { id } = router.query
  return (
    <h2>{id}</h2>
  )
}
