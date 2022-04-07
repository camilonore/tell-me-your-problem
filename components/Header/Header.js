import Link from 'next/link'
import { Button } from '../Button/Button'
import { useSession, signIn } from 'next-auth/react'
import styles from './Header.module.css'
import ProfileHeader from '../ProfileHeader/ProfileHeader'
import Search from '../../icons/Search'

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
        <Search className={styles.icon}/>
        <input type='text' className={styles.input} placeholder='Search...' />
      </div>
      <div className={styles.login}>
        {session ? <ProfileHeader img={session.user.image} /> : notLogged()}
      </div>
    </header>
  )
}

export { Header }
