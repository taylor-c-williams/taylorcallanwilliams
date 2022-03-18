import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.nav}>
      <NavLink to="/about">About</NavLink>
      <NavLink to="#">Portfolio</NavLink>
      <NavLink to="#">Contact</NavLink>
    </div>
  )
}
