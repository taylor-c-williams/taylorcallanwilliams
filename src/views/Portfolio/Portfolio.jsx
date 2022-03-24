import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import DoggieMatcher from './DoggieMatcher';
import BopSimon from './BopSimon';
import FastLancer from './FastLancer';

export default function Portfolio() {
  return (
    <div className={styles.portfolioMain}>
      <Parallax speed={-10}>
        <h1 className={animations.textShadowPopSl}>Portfolio</h1>
        <span className={styles.portfolioSubHeader}>
          Some stuff subheader past projects etcetera
        </span>
      </Parallax>
      <div>
        <DoggieMatcher />
        <BopSimon />
        <FastLancer />
      </div>
    </div>
  );
}
