import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import styles from './Footer.css';

export default function Footer() {
  return (
    <footer>
      <img src={linkedin} alt="LinkedIn" />
      <img src={github} alt="GitHub" />
    </footer>
  );
}
