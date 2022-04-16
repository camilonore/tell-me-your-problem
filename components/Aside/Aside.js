import UserCard from '../UserCard/UserCard'
import styles from './Aside.module.css'
import { doGet } from '../../services/doGet'
import { useState, useEffect } from 'react'
import { Loading } from '../Loading/Loading'

const Aside = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    doGet('/api/user')
      .then((users) => {
        setUsers(users)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return (
    <aside className={styles.aside}>
      <p>Popular Profiles</p>
      {loading
        ? <Loading />
        : users.map((user) => {
          return <UserCard key={user.id} img={user.img} name={user.username} />
        }
        )}
    </aside>
  )
}

export default Aside
