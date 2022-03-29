import { LoginForm } from '../components/LoginForm/LoginForm'
import styles from '../styles/Login.module.css'

export default function Login () {
  return (
    <main className={styles.loginMain}>
      <h1>Welcome to</h1>
      <h1>Tell Me Your Problem</h1>
      <LoginForm/>
    </main>
  )
}
