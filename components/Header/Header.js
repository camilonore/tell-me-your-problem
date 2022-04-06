import Link from 'next/link'
import { Button } from '../Button/Button'
import { useSession, signIn } from 'next-auth/react'
import styles from './Header.module.css'
import ProfileHeader from '../ProfileHeader/ProfileHeader'

// TODO: icon component
const notLogged = () => {
  return <Button onClick={() => signIn()}>Sign In</Button>
}
const Header = () => {
  const { data: session } = useSession()
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a className={styles.logo}>TMYP</a>
      </Link>
      <div className={styles.searchBar}>
        <svg
          width='24'
          height='24'
          strokeWidth='1.5'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={styles.icon}
        >
          <path
            d='M15.5 15.5L19 19'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M5 11C5 14.3137 7.68629 17 11 17C12.6597 17 14.1621 16.3261 15.2483 15.237C16.3308 14.1517 17 12.654 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11Z'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <input type='text' className={styles.input} placeholder='Search...' />
      </div>
      <div className={styles.login}>
        {session ? <ProfileHeader img={session.user.image} /> : notLogged()}
      </div>
    </header>
  )
}

export { Header }
