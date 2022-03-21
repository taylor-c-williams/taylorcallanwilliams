// import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import styles from './Main.module.css';
import Title from '../../components/Title/Title';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';

export default function Main() {
  return (
    <>
      <Nav />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          {/* <Outlet /> */}
          <Title />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
