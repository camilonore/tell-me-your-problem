import UserCard from '../UserCard/UserCard'
import styles from './Aside.module.css'
import { usersMock } from '../../Mocks/usersMock'

const Aside = () => {
  return (
    <aside className={styles.aside}>
      {
        usersMock.map(user => {
          return <UserCard key={user.id} img={user.img} name={user.name}/>
        })
      }
    </aside>
  )
}

export default Aside
