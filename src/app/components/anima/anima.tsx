import React from 'react';
import styles from './anima.module.css'

const Anima = () => {
    return (
        <div className={styles.content}>
            <div className={styles.cube}><div className={styles.pInCube}></div></div>
        </div>
    );
};

export default Anima;
