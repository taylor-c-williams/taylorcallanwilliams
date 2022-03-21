import { Parallax } from 'react-scroll-parallax';
import styles from './letters.module.css';

const copy = 'Taylor'.split('');
export default function Taylor() {
  return (
    <span>
      {copy.map((letter, i) => (
        <Parallax
          className={styles.letter}
          key={`copy-${i}`}
          speed={2 * (2 + i)}
        >
          {letter}
        </Parallax>
      ))}
    </span>
  );
}
