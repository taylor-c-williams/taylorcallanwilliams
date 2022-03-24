import styles from './Portfolio.module.css';
import fast from '../../assets/images/simon.png';

export default function BopSimon() {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectIcon}>
        <img src={fast} alt="Bop Simon project details" />
      </div>
      <div className={styles.projectDescription}>
        <div className={styles.blurb}>
          <span className={styles.subHeader}>Fast Lancer</span>
          REACT · JSX · CSS3 · MSW <br />A dynamically rendered single-page app
          which utilizes a RESTful API and CRUD functionality to build a
          freelancer's organizational solution, tracking pertinent data relating
          to open contracts and current clients. Completed with an all-remote
          team on a 4-day sprint.
          <ul>
            <li>
              Collaborated on components, utilities, auth functionality in React
              and JSX, Supabase back end and testing in Jest
            </li>
            <li>
              Designed detailed wireframes for desktop and mobile views which
              mapped user flow, established effective layouts and served as a
              guide throughout development
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
