import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.css';
import logo from '../../static/images/sitelogo.svg';

export default () => {
    return (
        <div id={styles.menubar}>
          <div>
              {/* <img src="../images/prof.gif" alt="Keren Wigelman"> */}
              <header>
                  <Link to="/">
                    <div className={styles['page-title']}>
                        {/* <div className={styles['name']}>KEREN<br/>WIGELMAN<span className={styles.transparent}>&nbsp;/&nbsp;</span></div>
                        <div className={styles['profession']}>FULLSTACK<br/>DEVELOPER</div> */}
                        <img src={logo} alt="Keren Wigelman / Fullstack Developer"/>
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