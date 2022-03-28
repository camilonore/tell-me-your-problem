import { Button } from '../Button/Button'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo} >TMYP</h1>
      <input type="text" className={styles.searchBar} placeholder='Search...'/>
      <div className={styles.login}>
        <Button label={'Sign Up'} background='black'/>
        <Button label={'Log In'} background='white'/>
      </div>
    </header>
  )
}

export { Header }
