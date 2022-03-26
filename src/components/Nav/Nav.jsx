import { useState, useEffect } from 'react';
import styles from './Nav.module.css';
import Hamburger from './Hamburger';
import NavLinks from './NavLinks';

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
        {menuToggle ? <Hamburger buttonChange="buttonChange" /> : null}
      </label>
      <NavLinks />
    </div>
  );
}
