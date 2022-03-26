import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import DoggieMatcher from './DoggieMatcher';
import BopSimon from './BopSimon';
import FastLancer from './FastLancer';
import MoreProjects from './MoreProjects';

export default function Portfolio() {
  return (
    <div>
      <Parallax speed={-10}>
        <h1 className={animations.textShadowPopSl}>Portfolio</h1>
        <span className={styles.portfolioSubHeader}>
          Some stuff subheader past projects etcetera
        </span>
      </Parallax>
      <div className={styles.portfolioMain}>
        <DoggieMatcher />
        <BopSimon />
        <FastLancer />
        <h2 className={animations.textShadowPopSl}>More Projects</h2>
        <MoreProjects />
        <div className={styles.portfolioLink}>
          <a href="http://www.github.com/taylor-c-williams">
            ...Psst! Check out my Github profile!
          </a>
        </div>
      </div>
    </div>
  );
}
