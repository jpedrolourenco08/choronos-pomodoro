import styles from './styles.module.css';


export function Footer(){
  return(
    <footer className={styles.footer}>
      <a href="">Entenda como funciona a técnica pomodor</a>
      <a href="">Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com o coração</a>
    </footer>
  )
}
