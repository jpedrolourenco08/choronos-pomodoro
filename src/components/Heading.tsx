import styles from './Heading.module.css';

export function Heading(){
  return(
    <h1 className={styles.heading}>Olá mundo!</h1>
  )
}

export function HeadingChildren(props){
  return(
    <h2 className={styles.heading_children}>{props.children}</h2>
  )
}