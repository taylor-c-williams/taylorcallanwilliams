import styles from './Portfolio.module.css';
export default function Portfolio() {
  return (
    <div className={styles.main}>
      <header>
        <h1>Portfolio</h1>
        <span className={styles.subHeader}>I make stuff online.</span>
        <span className={styles.blurb}>
          Cat ipsum dolor sit amet, human is in bath tub, emergency! drowning!
          meooowww!. Swat at dog poop on floor and watch human clean up lick the
          other cats nap all day warm up laptop with butt lick butt fart
        </span>
      </header>
    </div>
  );
}
