import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.css';

export default () => {
    return (
        <div id={styles.menubar}>
          <div>
              {/* <img src="../images/prof.gif" alt="Keren Wigelman"> */}
              <header>
                  <Link to="/">
                    <div>
                        <h1>Keren Wigelman<span className={styles.transparent}>&nbsp;/&nbsp;</span></h1>
                        <h2>Fullstack Developer</h2>
                    </div>
                  </Link>
              </header>
              <nav>
                  <ul>
                      <Link to="/portfolio"><li>Portfolio</li></Link>
                      <li>Resume</li>
                      <li>Contact</li>
                  </ul>
              </nav>
          </div>
        </div>
    )
}