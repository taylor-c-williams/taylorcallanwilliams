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
          I am a creator, a collaborator and a full-stack Software Engineer. I
          first got excited about writing code (in Notepad) in 1999 and have
          been building things online ever since. I love to work with any medium
          which is both technical and creative.
        </span>
      </header>
    </div>
  );
}
