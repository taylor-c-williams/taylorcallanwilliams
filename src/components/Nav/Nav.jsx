import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.hamburgerZone}>
        {/* <button/> */}
        <svg viewBox="0 0 100 80" width="30" height="30">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </div>
      <div className={styles.navLinks}>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
    </div>
  );
}
