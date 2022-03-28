import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import dogMatch from '../../assets/images/doggie.png';

export default function DoggieMatcher() {
  return (
    <div className={styles.projectContainer}>
      <Parallax speed={25}>
        <div className={styles.projectIcon}>
          <img src={dogMatch} alt="Doggie Matcher project" />
        </div>
      </Parallax>
      <Parallax speed={1}>
        <div className={styles.projectDescription}>
          <div className={styles.blurb}>
            <h2 className={animations.textShadowPopSl}>Doggie Match</h2>
            <h3>REACT · NODEJS · EXPRESS · CSS3</h3>A dynamic full-stack CRUD
            app munging multiple RESTful APIs to match users with dog breeds
            based on bespoke personality algorithms. Completed with an
            all-remote team on a 4-day sprint.
            <ul>
              <li>Contributed Front & Back end commits in Node, React & CSS</li>
              <li>
                Wrote class components managing complex state and asynchronous
                functions in React
              </li>
              <li>
                Spearheaded responsive UX/UI design concepts in React and CSS,
                built extensive wireframes for desktop and mobile views
              </li>
            </ul>
            <div className={styles.projectLinks}>
              <a
                href="https://dog-match-app.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                LIVE
              </a>
              <a
                href="https://github.com/Dog-Match"
                target="_blank"
                rel="noreferrer"
              >
                CODE
              </a>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
