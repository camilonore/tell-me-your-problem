import Link from 'next/link'
import styles from './UserCard.module.css'

const UserCard = ({ img, name }) => {
  return (
    <div className={styles.userCard}>
      <img src={img} alt={name} />
      <Link href='https://google.com'>
        <a>{name}</a>
      </Link>
    </div>
  )
}

export default UserCard
