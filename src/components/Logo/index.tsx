import styles from './styles.module.css';
import { TimerIcon } from 'lucide-react';

export function Logo(){
  return(
    <h1 className={styles.logo}>
      <a className={styles.logoLink} href="#">
        <TimerIcon/>
        <span>Chronos</span>
      </a>
    </h1>
  )
}
