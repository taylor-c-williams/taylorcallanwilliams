import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import animations from './animations.module.css';
import styles from './Main.module.css';
import Title from '../../components/Title/Title';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
  // const titleParallax = useParallax({
  //   scale: [0.9, 1.5, 'easeInQuad'],
  // });

  return (
    <>
      <Nav />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <section id="home" className={animations.textShadowPopSl}>
            <Title />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
