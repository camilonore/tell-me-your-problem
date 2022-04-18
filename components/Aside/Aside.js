import UserCard from '../UserCard/UserCard'
import styles from './Aside.module.css'

const Aside = ({ users }) => {
  return (
    <aside className={styles.aside}>
      <p>Popular Profiles</p>
      {users.map((user) => {
        return (
          <UserCard
            key={user._id}
            img={user.img}
            name={user.username}
            id={user._id}
          />
        )
      })}
    </aside>
  )
}

export default Aside
