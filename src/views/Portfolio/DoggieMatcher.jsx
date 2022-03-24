import styles from './Portfolio.module.css';
import dogMatch from '../../assets/images/xoloitzcuintle.png';

export default function DoggieMatcher() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectIcon}>
        <img src={dogMatch} alt="Doggie Matcher project" />
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.blurb}>
          <span className={styles.subHeader}>Doggie Matcher</span>
          REACT · NODEJS · EXPRESS · CSS3
          <br />A dynamic full-stack CRUD app munging multiple RESTful APIs to
          match users with dog breeds based on bespoke personality algorithms.
          Completed with an all-remote team on a 4-day sprint.
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
            <a href="#">LIVE</a> | <a href="#">CODE</a>
          </div>
        </div>
      </div>
    </div>
  );
}
