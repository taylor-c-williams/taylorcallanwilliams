import { Parallax } from 'react-scroll-parallax';
import styles from './letters.module.css';

const copy = 'Taylor'.split('');
export default function Taylor() {
  return (
    <span className={styles.taylor}>
      {/* {copy.map((letter, i) => (
        <Parallax
          className={styles.letter}
          key={`copy-${i}`}
          speed={2 * (2 + i)}
        > */}
      <Parallax speed={2}>Taylor</Parallax>
      <br />
      <Parallax speed={1}>Callan</Parallax>
      <br />
      <Parallax speed={2}>Williams</Parallax>
    </span>
  );
}
