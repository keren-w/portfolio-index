import React, { Component } from 'react';
import styles from './menubar.css';

export default () => {
    return (
        <div id="sidebar">
          <div>
              {/* <img src="../images/prof.gif" alt="Keren Wigelman"> */}
              <header>
                  <div>
                      <h1>Keren Wigelman<span className="transparent">&nbsp;/&nbsp;</span></h1>
                      <h2>Fullstack Developer</h2>
                  </div>
              </header>
              <nav>
                  <ul>
                      <li>Portfolio</li>
                      <li>Resume</li>
                      <li>Contact</li>
                  </ul>
              </nav>
          </div>
        </div>
    )
}