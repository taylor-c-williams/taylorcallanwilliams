import styles from './Portfolio.module.css';

export default function MoreProjects() {
  return (
    <div className={styles.moreMain}>
      <div className={styles.moreBlurb}>
        <h2>Portfolio Site</h2>
        My Portfolio site is built with React and React Router 6, utilizing a
        mobile-first design philosophy
        <br />
        <div className={styles.projectLinks}>
          <a href="https://github.com/taylor-c-williams/taylorcallanwilliams">
            Github Repo
          </a>
        </div>
      </div>
      <div className={styles.moreBlurb}>
        <h2>Hand of Resources</h2>A Back end exercise using Node, Express,
        Postgres DB and Heroku to deploy CRUD endpoints on multiple tables.
        Testing in Jest. <br />
        <div className={styles.projectLinks}>
          <a href="https://github.com/taylor-c-williams/backend-hand-of-resources">
            Github Repo
          </a>
        </div>
      </div>
      <div className={styles.moreBlurb}>
        <h2>Haunted Sword Emporium</h2>
        The Haunted Sword Emporium is a Haunted Sword E-Commerce Platform
        featuring Javascript, HTML, CSS and local storage to mock an online
        shopping cart. Testing in Q-Unit. (Enter at own risk, developer not
        responsible for any ancient curses that may be bestowed upon the user)
        <div className={styles.projectLinks}>
          <a href="https://github.com/taylor-c-williams/lab-06-e-commerce-site/">
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
          <a href="https://github.com/taylor-c-williams/ghibli-FE/">
            Github Repo
          </a>
        </div>
      </div>
    </div>
  );
}
