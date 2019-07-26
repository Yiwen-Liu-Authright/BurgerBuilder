/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:46:34
 * @LastEditTime: 2019-07-25 15:08:17
 * @Description: Reusable navigation Item
 */

import React from 'react';
import styles from './NavigationItem.module.css';


const navigationItem = (props) => (
    <li className={styles.NavigationItem}>
        <a href={props.link} className={props.active ? styles.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;