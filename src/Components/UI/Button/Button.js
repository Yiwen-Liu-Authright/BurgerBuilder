/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 13:40:31
 * @LastEditTime: 2019-07-30 12:02:07
 * @Description:    Reusable UI Component -- Button 
 *                  Button with btnType Success and Danger css style
 */

import React from 'react';
import styles from './Button.module.css'

const button = (props) => (
    // Do the button style with btnType S(success) & D(danger)
    <div>
        <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
        {console.log(props.btnType)}
    </div>
    
        
    
);
export default button;