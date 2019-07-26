/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 13:40:31
 * @LastEditTime: 2019-07-25 23:25:26
 * @Description:    Reusable UI Component --button 
 *                  Button with btnType Success and Danger css style
 */

import React from 'react';
import styles from './Button.module.css'
const button = (props) => (
    // Do the button style with btnType S(success) & D(danger)
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);
export default button;