import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [menuToggle, setMenuToggle] = useState(false);

  const buttonChange = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className={styles.navContainer}>
      <label
        className={menuToggle ? `${styles.menuOpen}` : `${styles.menuClosed}`}
      >
        <button onClick={buttonChange} />
        {menuToggle ? (
          <div>
            <ul>
              <li>
                <NavLink onClick={buttonChange} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={buttonChange} to="/about">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={buttonChange} to="#">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink onClick={buttonChange} to="#">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null}
      </label>
      <nav className={styles.navLinks}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="#">Portfolio</NavLink>
        <NavLink to="#">Contact</NavLink>
      </nav>
    </div>
  );
}
