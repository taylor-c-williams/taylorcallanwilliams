import styles from '../../views/Main/Main.module.css';

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
