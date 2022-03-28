import styles from './Button.module.css'

const Button = ({ onClick, label, background }) => {
  return (
    <button onClick={onClick} className={styles[background]}>
      {label}
    </button>
  )
}

export { Button }
