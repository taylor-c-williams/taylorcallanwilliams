import styles from '../../views/Main/Main.module.css';

export default function Tile() {
  return (
    <div>
      <section className={styles.header}>
        Taylor <br />
        Callan <br />
        Williams
      </section>
      <section className={styles.subHeader}>Software Developer</section>

      <section className={styles.blurb}></section>
    </div>
  );
}
