import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import animations from './animations.module.css';
import styles from './Main.module.css';
import Title from '../../components/Title/Title';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 300 ? setScrolled(true) : setScrolled(false);
    });
  }, []);

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth', // for smoothly scrolling
  //   });
  // };

  return (
    <>
      <Nav scrolled={scrolled} setScrolled={setScrolled} />
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
          {/* {scrolled && (
            <button onClick={scrollToTop} className={styles.backToTop}>
              &#8679;
            </button>
          )} */}
        </main>
        <Footer />
      </div>
    </>
  );
}
