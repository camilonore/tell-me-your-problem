import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Logout } from '../../icons/Logout'
import styles from './ProfileHeader.module.css'

const ProfileHeader = ({ img }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <button className={styles.button} onClick={() => setModalOpen(prev => !prev)}>
        <Image height={50} width={50} alt='' className={styles.image} src={img} />
      </button>
      <div className={styles.modal} style={{ display: modalOpen ? 'block' : 'none' }}>
        <Link href='/api/auth/signout' passHref>
          <a>
            <span>
              <Logout height={15} width={15}/>
            </span>
            Logout
          </a>
        </Link>
      </div>
    </>
  )
}

export default ProfileHeader
