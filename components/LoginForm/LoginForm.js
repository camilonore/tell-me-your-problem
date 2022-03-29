import { Button } from '../Button/Button'
import styles from './LoginForm.module.css'

const LoginForm = () => {
  function handleSubmit (evt) {
    evt.preventDefault()
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="example@gmail.com" autoComplete="on" required/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="password" autoComplete="on" required/>
      <Button label='Continue' background='black'/>
  </form>
  )
}

export { LoginForm }
