import styles from '../../views/Main/Main.module.css';
import { Parallax } from 'react-scroll-parallax';

export default function Tile() {
  return (
    <div className={styles.titleContainer}>
      <span className={styles.header}>
        Taylor <br />
        Callan <br />
        Williams
      </span>
      <div className={styles.subHeader}>Software Developer</div>
    </div>
  );
}
