import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Hamburger(buttonChange) {
  return (
    <div className={styles.hamburgerUl}>
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
  );
}
