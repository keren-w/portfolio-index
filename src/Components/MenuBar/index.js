import React from 'react';
import {Link} from 'react-router-dom';
import styles from './style.css';
import logo from '../../static/images/sitelogo.svg';

export default () => {
    return (
        <div id={styles.menubar}>
          <div>
                <header>
                    <Link to="/">
                        <img src={logo} alt="Keren Wigelman / Fullstack Developer" className={styles['page-title']}/>
                    </Link>
                </header>
              <nav>
                  <ul className={styles['nav-categories']}>
                      <Link to="/portfolio"><li>Portfolio</li></Link>
                      <li>Resume</li>
                      <li>Contact</li>
                  </ul>
              </nav>
          </div>
        </div>
    )
}