import Image from 'next/image'
import Link from 'next/link'
import styles from './UserCard.module.css'

const UserCard = ({ img, name, id }) => {
  return (
    <div className={styles.userCard}>
      <Image src={img} alt={name} width={30} height={30} className={styles.img}/>
      <Link href={'/user/' + id}>
        <a>{name}</a>
      </Link>
    </div>
  )
}

export default UserCard
