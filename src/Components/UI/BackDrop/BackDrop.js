/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 11:42:07
 * @LastEditTime: 2019-07-25 13:16:25
 * @Description: 
 */

// set it seperate with Modal is because sideDrop & navigation may also use this Component

import React from 'react';
import styles from './Backdrop.module.css';

const backdrop = (props) => (
    // div holds up the backdrop styles
    props.show ? <div className={styles.Backdrop} onClick={props.clicked}></div> : null
);      
 
export default backdrop;