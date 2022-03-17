import { Link } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
  <span>Portfolio</span>
  <span>Resume</span>
  <span>Contact</span>
      </div>
  )
}
