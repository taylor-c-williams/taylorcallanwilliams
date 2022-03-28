import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Hamburger(buttonChange) {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.hamburgerUl}>
      <ul>
        <li>
          <Link
            onClick={buttonChange}
            to="#home"
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
            to="#about"
            scroll={(el) => scrollWithOffset(el, 150)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            onClick={buttonChange}
            to="#portfolio"
            scroll={(el) => scrollWithOffset(el, 550)}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            onClick={buttonChange}
            to="#contact"
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
