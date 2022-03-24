import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import dogMatch from '../../assets/images/xoloitzcuintle.png';

export default function Portfolio() {
  return (
    <div className={styles.portfolioMain}>
      <div className={styles.portfolioContainer}>
        <Parallax speed={10}>
          <h1 className={animations.textShadowPopSl}>Portfolio</h1>
        </Parallax>
        <div className={styles.projectContainer}>
          <span className={styles.subHeader}>Doggie Matcher</span>
          <img src={dogMatch} alt="Doggie Matcher project" />
        </div>
        <div className={styles.blurb}>
          Cat ipsum dolor sit amet, human is in bath tub, emergency! drowning!
          meooowww!. Swat at dog poop on floor and watch human clean up lick the
          other cats nap all day warm up laptop with butt lick butt fart
        </div>
      </div>
    </div>
  );
}
