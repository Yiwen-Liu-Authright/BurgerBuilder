/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:20:41
 * @LastEditTime: 2019-07-25 15:07:12
 * @Description: Toolbar holds all the elements menu & logo & navigation
 */

import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <div>MENU</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;