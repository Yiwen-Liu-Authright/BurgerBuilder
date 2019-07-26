/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:20:41
 * @LastEditTime: 2019-07-25 18:13:04
 * @Description: Toolbar holds all the elements menu & logo & navigation
 */

import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={styles.Logo}><Logo /></div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;