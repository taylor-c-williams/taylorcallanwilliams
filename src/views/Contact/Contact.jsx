import styles from './Contact.module.css';
export default function Contact() {
  return (
    <div className={styles.contactMain}>
      <header>
        <h1>Get in Touch</h1>
        <span className={styles.contactSubHeader}>I make stuff online.</span>
        <span className={styles.contactBlurb}>
          Cat ipsum dolor sit amet, human is in bath tub, emergency! drowning!
          meooowww!. Swat at dog poop on floor and watch human clean up lick the
          other cats nap all day warm up laptop with butt lick butt fart
        </span>
      </header>
    </div>
  );
}
