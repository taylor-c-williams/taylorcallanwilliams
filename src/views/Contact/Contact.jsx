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
          <h5 className={animations.textShadowPopSl}>Get in Touch!</h5>
        </Parallax>
        <span className={styles.contactSubHeader}>
          I am looking for new opportunities!
        </span>
        <span className={styles.emailAddress}>
          👋{' '}
          <a
            href="mailto:hello@taylorcallanwilliams.io"
            target="_blank"
            rel="noreferrer"
          >
            hello@taylorcallanwilliams.io
          </a>
        </span>
        <span className={styles.mobileLinks}>
          <h3>
            🚹{' '}
            <a
              href="https://www.linkedin.com/in/taylor-c-williams/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin/in/taylor-c-williams
            </a>
            <p />
            👁‍🗨{' '}
            <a
              href="http://www.github.com/taylor-c-williams"
              target="_blank"
              rel="noreferrer"
            >
              github.com/taylor-c-williams
            </a>
            <p />
            💻{' '}
            <a
              href="https://drive.google.com/file/d/1V_Z1qjpsz6MVLN9wLz5fRaNs8WOAi5sF/view?usp=sharing/"
              target="_blank"
              rel="noreferrer"
            >
              view my resume
            </a>
          </h3>
        </span>
      </header>
      <div className={styles.contactInfo}>
        <Parallax speed={-5}>
          <div className={styles.tooltip}>
            <a
              href="https://www.linkedin.com/in/taylor-c-williams/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinProfile} alt="the LinkedIn logo" />
              <div className={styles.hover}>Find me on LinkedIn!</div>
            </a>
          </div>
          <div className={styles.tooltip}>
            <a
              href="http://www.github.com/taylor-c-williams"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gitHub} alt="the github logo" />
              <div className={styles.hover}>Check out my Github!</div>
            </a>
          </div>
          <div className={styles.tooltip}>
            <a
              href="mailto:hello@taylorcallanwilliams.io"
              target="_blank"
              rel="noreferrer"
            >
              <img src={email} alt="An Email icon" />
              <div className={styles.hover}>hello@taylorcallanwilliams.io</div>
            </a>
          </div>
          <div className={styles.tooltip}>
            <a
              href="https://drive.google.com/file/d/1V_Z1qjpsz6MVLN9wLz5fRaNs8WOAi5sF/view?usp=sharing/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={cv} alt="Check out my Resume!" />
              <div className={styles.hover}>View my resume</div>
            </a>
          </div>
        </Parallax>
      </div>
    </div>
  );
}
