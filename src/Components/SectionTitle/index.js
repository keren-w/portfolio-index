import React from 'react';
import styles from "./style.css";

export default ({children}) => {
    return (
    <div className={styles['section-title']}>
        {children}
    </div>)
}
 