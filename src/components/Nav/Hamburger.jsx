import { HashLink } from 'react-router-hash-link';
import styles from './Nav.module.css';

export default function Hamburger({ buttonChange }) {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

  return (
    <div className={styles.hamburgerUl}>
      <ul>
        <li>
          <HashLink
            onClick={buttonChange}
            smooth
            to="#home"
            scroll={(el) => scrollWithOffset(el)}
          >
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            onClick={buttonChange}
            smooth
            to="#about"
            scroll={(el) => scrollWithOffset(el)}
          >
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            onClick={buttonChange}
            smooth
            to="#portfolio"
            scroll={(el) => scrollWithOffset(el)}
          >
            Portfolio
          </HashLink>
        </li>
        <li>
          <HashLink
            onClick={buttonChange}
            smooth
            to="#contact"
            scroll={(el) => scrollWithOffset(el)}
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </div>
  );
}
