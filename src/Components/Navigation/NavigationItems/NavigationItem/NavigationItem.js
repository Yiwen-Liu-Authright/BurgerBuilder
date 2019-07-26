/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:46:34
 * @LastEditTime: 2019-07-26 00:07:53
 * @Description:    Reusable navigation Item 
 *                  with a link to the deriction and able to be activated
 */

import React from 'react';
import styles from './NavigationItem.module.css';


const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <a href={props.link} className={props.active ? styles.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;