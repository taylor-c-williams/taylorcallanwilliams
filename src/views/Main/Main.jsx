import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <Nav />
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
