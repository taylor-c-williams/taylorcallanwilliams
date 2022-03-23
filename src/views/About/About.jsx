import { Parallax } from 'react-scroll-parallax';
import animations from '../../views/Main/animations.module.css';
import styles from './About.module.css';
import portrait from '../../assets/images/linkd.png';

export default function About() {
  return (
    <div className={styles.aboutMain}>
      <Parallax speed={-10}>
        <span className={styles.portrait}>
          <img src={portrait} alt="A portrait of Taylor" />
        </span>
      </Parallax>
      <header>
        <Parallax speed={10}>
          <h1 className={animations.textShadowPopSl}>Hi! I'm Taylor.</h1>
        </Parallax>
        <span className={styles.subHeader}>I make stuff online.</span>
        <span className={styles.blurb}>
          Cat ipsum dolor sit amet, human is in bath tub, emergency! drowning!
          meooowww!. Swat at dog poop on floor and watch human clean up lick the
          other cats nap all day warm up laptop with butt lick butt fart
        </span>
      </header>
    </div>
  );
}
