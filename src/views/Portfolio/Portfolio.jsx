import { Parallax } from 'react-scroll-parallax';
import styles from './Portfolio.module.css';
import animations from '../Main/animations.module.css';
import DoggieMatcher from './DoggieMatcher';
import BopSimon from './BopSimon';
import FastLancer from './FastLancer';
import MoreProjects from './MoreProjects';

export default function Portfolio() {
  return (
    <div className={styles.portfolioMain}>
      <Parallax speed={10}>
        <h1 className={animations.textShadowPopSl}>Portfolio</h1>
        <span className={styles.portfolioSubHeader}>
          Selected works from my favorite repositories
        </span>
      </Parallax>
      <BopSimon />
      <DoggieMatcher />
      <FastLancer />
      <h2 className={animations.textShadowPopSl}>More Projects</h2>
      <MoreProjects />
      <div className={styles.rightAligner}>
        <span className={styles.githubPlug}>
          <a
            href="http://www.github.com/taylor-c-williams"
            target="_blank"
            rel="noreferrer"
          >
            ...Psst! Check out my Github profile!
          </a>
        </span>
      </div>
    </div>
  );
}
