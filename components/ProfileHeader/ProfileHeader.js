import { useState } from 'react'
import styles from './ProfileHeader.module.css'

const ProfileHeader = ({ img }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <button className={styles.button} onClick={() => setModalOpen(prev => !prev)}>
        <img className={styles.image} src={img} />
      </button>
      <div className={styles.modal} style={{ display: modalOpen ? 'block' : 'none' }}>
        <a href='/api/auth/signout'>Log Out</a>
      </div>
    </>
  )
}

export default ProfileHeader
