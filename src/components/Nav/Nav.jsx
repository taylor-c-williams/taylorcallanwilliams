import { Link } from 'react-scroll';
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
          // Hamburger Nav //
          <div>
            <ul>
              <li>
                <Link
                  onClick={buttonChange}
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={buttonChange}
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  onClick={buttonChange}
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  onClick={buttonChange}
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </label>

      {/* // Regular Nav // */}
      <nav className={styles.navLinks}>
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          About
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Portfolio
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
      </nav>
    </div>
  );
}
