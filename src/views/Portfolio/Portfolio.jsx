import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
export default function Portfolio() {
  return (
    <div className={styles.main}>
      <header>
        <Parallax speed={10}>
          <h1 className={animations.textShadowPopSl}>Portfolio</h1>
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
