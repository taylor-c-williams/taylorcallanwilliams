import styles from './Portfolio.module.css';

export default function MoreProjects() {
  return (
    <div className={styles.moreMain}>
      <div className={styles.moreBlurb}>
        <h2>Portfolio Site</h2>
        This Portfolio site is built with React and React Router 6, utilizing a
        mobile-first design philosophy. Check out the code!
        <br />
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/taylor-c-williams/taylorcallanwilliams"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className={styles.moreBlurb}>
        <h2>Hand of Resources</h2>A Back end exercise using Node, Express,
        Postgres DB and Heroku to deploy CRUD endpoints on multiple tables.
        Testing in Jest. <br />
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/taylor-c-williams/backend-hand-of-resources"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className={styles.moreBlurb}>
        <h2>Haunted Sword Emporium</h2>An E-Commerce platform written in pure
        Javascript, HTML, CSS and utilizing local storage to mock an online
        shopping cart. Testing in Q-Unit. (Enter at own risk, developer not
        responsible for any ancient curses that may be bestowed upon the user)
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/taylor-c-williams/lab-06-e-commerce-site/"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
      <div className={styles.moreBlurb}>
        <h2>Ghibli Library</h2>
        Ghibli Library is a full-stack CRUD app built in React, Node, Express
        and Postgres utilizing a RESTful API and responsive design to display
        user-customizable data on every Studio Ghibli film. <br />
        <div className={styles.projectLinks}>
          <a
            href="https://github.com/taylor-c-williams/ghibli-FE/"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
