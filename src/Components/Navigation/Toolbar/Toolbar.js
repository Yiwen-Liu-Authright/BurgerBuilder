/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:20:41
 * @LastEditTime: 2019-07-26 00:04:42
 * @Description: Toolbar holds all the elements menu & logo & navigation
 */

import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={styles.Toolbar}>
        {/* Menu clicked the sideDrawer will show */}
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {/* Logo Image & navigation items when desktop version */}
        <div className={styles.Logo}><Logo /></div>
        <nav className={styles.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;