import styles from '../../views/Main/Main.module.css';

export default function Tile() {
  return (
    <div>
      <span className={styles.header}>
        Taylor <br />
        Callan <br />
        Williams
      </span>
      <br />
      <span className={styles.subHeader}>Software Developer</span>
    </div>
  );
}
