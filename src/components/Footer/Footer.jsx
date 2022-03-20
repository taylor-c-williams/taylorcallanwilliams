import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';
import styles from './Footer.css';

export default function Footer() {
  return (
    <footer>
      <a
        href="https://www.linkedin.com/in/taylor-c-williams/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/taylor-c-williams"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="GitHub" />
      </a>
    </footer>
  );
}
