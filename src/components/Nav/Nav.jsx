import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.hamburgerZone}>
      <button/>
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
    </div>
  )
}
