/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 19:45:56
 * @LastEditTime: 2019-07-25 12:50:05
 * @Status: 
 * @Description: Individual Build Control Componet
 */

import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={styles.BuildControl}>
        <div className={styles.Label}>{props.label}</div>
        <button className={styles.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={styles.More} onClick={props.added}>More</button>
    </div>
);

export default buildControl;
