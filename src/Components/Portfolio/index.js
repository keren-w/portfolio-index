import React from 'react';
import styles from './style.css';

export default () => {
    return (
        <div id={styles.portfolio}>
            <div className={styles['p-container']}>
                <div id="mockbnb" className={styles['p-item']}>
                    <a href="http://mockbnb.kerenwebhome.com">
                    <h3 className={styles['project-title']}>Mockbnb</h3></a>
            </div>
                <div id="hireme" className={styles['p-item']}><a href="http://hireme.kerenwebhome.com">HireMe</a></div>
                <div id="battleship" className={styles['p-item']}><a href="http://battleship.kerenwebhome.com">The Battleship Project</a></div>
            </div>
        </div>
    )
}