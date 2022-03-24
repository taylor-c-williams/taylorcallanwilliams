import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

export default function NavLinks() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
          Home
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>
          About
        </Link>
        <Link
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
