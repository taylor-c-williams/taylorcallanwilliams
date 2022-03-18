import { Outlet } from 'react-router-dom'
import Title from '../../components/Title/Title'
import Nav from '../../components/Nav/Nav'
import styles from './Main.module.css'

export default function Main() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        {/* <Title /> */}
        <Outlet />
      </main>
    </>
  )
}
