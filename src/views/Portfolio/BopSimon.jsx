import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import simon from '../../assets/images/bop.png';

export default function BopSimon() {
  return (
    <div className={styles.projectContainer}>
      <Parallax speed={25}>
        <div className={styles.projectIcon}>
          <a
            href="https://bop-simon-prod.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={simon} alt="Bop Simon project details" />
          </a>
        </div>
      </Parallax>
      <Parallax speed={1}>
        <div className={styles.blurb}>
          <h2 className={animations.textShadowPopSl}>Bop Simon!</h2>
          <h3>REACT · TONE.JS · MATERIAL UI · BCRYPT · EXPRESS · POSTGRESQL</h3>
          A full-stack interactive musical memory game built in React, Tone.Js,
          CSS, PostgreSQL and Express. Using custom-built synthesized audio and
          game logic, Bop Simon guides the player through randomly generated
          melodies of increasing difficulty. User auth data is hashed and
          encrypted using JSON Web Tokens and Bcrypt. Built with an all-remote
          team during a 10 day sprint.
          <ul>
            <li>
              Led development, testing and implementation of game logic using
              React Hooks, Context and asynchronous functions
            </li>
            <li>
              Implemented third-party libraries Tone.Js and Material UI to build
              a cohesive, dynamic user experience
            </li>
          </ul>
          <div className={styles.projectLinks}>
            <a
              href="https://bop-simon-prod.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              LIVE
            </a>
            <a
              href="https://github.com/bop-simon"
              target="_blank"
              rel="noreferrer"
            >
              CODE
            </a>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
