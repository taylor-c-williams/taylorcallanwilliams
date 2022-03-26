import { Parallax } from 'react-scroll-parallax';
import animations from '../Main/animations.module.css';
import styles from './Contact.module.css';
import linkedinProfile from '../../assets/images/linkedin.png';
import gitHub from '../../assets/images/github.png';
import email from '../../assets/images/email.png';
import cv from '../../assets/images/cv.png';

export default function Contact() {
  return (
    <div className={styles.contactMain}>
      <header>
        <Parallax speed={10}>
          <h1 className={animations.textShadowPopSl}>Get in Touch</h1>
        </Parallax>
        <span className={styles.contactSubHeader}>
          I am looking for new opportunities!
        </span>
      </header>
      <div className={styles.contactInfo}>
        <Parallax speed={-5}>
          <img src={linkedinProfile} alt="the LinkedIn logo" />
          <img src={gitHub} alt="the github logo" />
          <img src={email} alt="An Email icon" />
          <img src={cv} alt="Check out my Resume!" />
        </Parallax>
      </div>
    </div>
  );
}
