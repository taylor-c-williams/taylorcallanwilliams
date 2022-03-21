import styles from './About.module.css';
import portrait from '../../assets/images/linkd.png';

export default function About() {
  return (
    <div className={styles.main}>
      <section className={styles.portrait}>
        <img src={portrait} alt="A portrait of Taylor" />
      </section>
      <header>
        <h1>Hi! I'm Taylor.</h1>
        <span className={styles.subHeader}>I make shit for the internet.</span>
        <span>
          Cat ipsum dolor sit amet, human is in bath tub, emergency! drowning!
          meooowww!. Swat at dog poop on floor and watch human clean up lick the
          other cats nap all day warm up laptop with butt lick butt fart
          rainbows until owner yells pee in litter box hiss at cats, nyan nyan
          goes the cat, scraaaaape scraaaape goes the walls when the cat murders
          them with its claws. Intrigued by the shower sleep nap yet toy mouse
          squeak roll over but enslave the hooman need to petted shake treat
          bag. X love and
        </span>
      </header>
    </div>
  );
}
