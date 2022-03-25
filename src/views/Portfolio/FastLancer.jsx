import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import fast from '../../assets/images/lancer.png';

export default function BopSimon() {
  return (
    <div className={styles.projectContainer}>
      <Parallax speed={25}>
        <div className={styles.projectIcon}>
          <img src={fast} alt="Bop Simon project details" />
        </div>
      </Parallax>
      <Parallax speed={1}>
        <div className={styles.projectDescription}>
          <div className={styles.blurb}>
            <h2 className={animations.textShadowPopSl}>Fast Lancer</h2>
            <h3>REACT · JSX · CSS3 · MSW </h3>A dynamically rendered single-page
            app which utilizes a RESTful API and CRUD functionality to build a
            freelancer's organizational solution, tracking pertinent data
            relating to open contracts and current clients. Completed with an
            all-remote team on a 4-day sprint.
            <ul>
              <li>
                Collaborated on components, utilities, auth functionality in
                React and JSX, Supabase back end and testing in Jest
              </li>
              <li>
                Designed detailed wireframes for desktop and mobile views which
                mapped user flow, established effective layouts and served as a
                guide throughout development
              </li>
            </ul>
            <div className={styles.projectLinks}>
              <a href="#">LIVE</a>
              <a href="#">CODE</a>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
