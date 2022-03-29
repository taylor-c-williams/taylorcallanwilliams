/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from './About.module.css';
import node from '../../assets/images/icons/nodedotjs.svg';
import react from '../../assets/images/icons/react.svg';
import css from '../../assets/images/icons/css3.svg';
import express from '../../assets/images/icons/express.svg';
import postgres from '../../assets/images/icons/postgresql.svg';
import jest from '../../assets/images/icons/jest.svg';
import json from '../../assets/images/icons/json.svg';
import git from '../../assets/images/icons/git.svg';
import html from '../../assets/images/icons/html5.svg';
import js from '../../assets/images/icons/javascript.svg';

export default function tech() {
  return (
    <div className={styles.tech}>
      <h6>Some tech I like to work with:</h6>
      <div className={styles.techContainer}>
        <div>
          React <img src={react} alt="react" />
        </div>
        <div>
          Node.JS
          <img src={node} alt="node.js" />
        </div>
        <div>
          Express.JS <img src={express} alt="Express.js" />
        </div>
        <div>
          PostgreSQL <img src={postgres} alt="PostgreSQL" />
        </div>
        <div>
          Jest <img src={jest} alt="Jest" />
        </div>
        <div>
          JavaScript <img src={js} alt="JavaScript" />
        </div>
        <div>
          HTML5 <img src={html} alt="html" />
        </div>
        <div>
          CSS3 <img src={css} alt="CSS 3" />
        </div>
        <div>
          JSON <img src={json} alt="JSON" />
        </div>
        <div>
          Git <img src={git} alt="git" />
        </div>
      </div>
    </div>
  );
}
