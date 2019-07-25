/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 11:36:11
 * @LastEditTime: 2019-07-25 12:42:22
 * @Description: wrapping any content we want to show under the modal
 */

import React from 'react';
import styles from './Modal.module.css';

// add it to the place we want to show
const modal = (props) => (
    //props.children can be anything inside the props
    <div className={styles.Modal}
        style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
        {props.children}
    </div>
);

export default modal;
