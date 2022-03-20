import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  const buttonChange = () => {
    setMenuToggle(!menuToggle);
  };

  console.log(menuToggle);

  return (
    <div className={styles.navContainer}>
      <label
        className={menuToggle ? `${styles.open}` : `${styles.hamburgerZone}`}
      >
        <button onClick={buttonChange} />
        {menuToggle ? (
          <div>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="#">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="#">Contact</NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </label>
      <div className={styles.navLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact</NavLink>
      </div>
    </div>
  );
}
