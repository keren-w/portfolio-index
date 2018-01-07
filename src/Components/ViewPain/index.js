import React, { Component } from 'react';
import styles from './viewpain.css';

export default () => {
    return (
        <main>
            <div id="portfolio">
                <div className="p-container">
                  <div id="mockbnb" className="p-item"><a href="http://mockbnb.kerenwebhome.com">Mockbnb</a></div>
                  <div id="hireme" className="p-item"><a href="http://hireme.kerenwebhome.com">HireMe</a></div>
                  <div id="battleship" className="p-item"><a href="http://battleship.kerenwebhome.com">The Battleship Project</a></div>
                </div>
            </div>
            <div id="resume"></div>
            <div id="contact"></div>
        </main>
    )
}