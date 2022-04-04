import Image from 'next/image'
import Link from 'next/link'
import styles from './UserCard.module.css'

const UserCard = ({ img, name }) => {
  return (
    <div className={styles.userCard}>
      <Image src={img} alt={name} width={30} height={30} className={styles.img}/>
      <Link href={'/p/' + name}>
        <a>{name}</a>
      </Link>
    </div>
  )
}

export default UserCard
