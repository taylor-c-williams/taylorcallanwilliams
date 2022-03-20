import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import styles from './Main.module.css';

export default function Main() {
  return (
    <>
      <Nav />
      <div className={styles.circle}> </div>
      <div className={styles.mainContainer}>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </>
  );
}
