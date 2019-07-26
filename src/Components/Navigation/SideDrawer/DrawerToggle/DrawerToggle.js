/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 18:08:23
 * @LastEditTime: 2019-07-26 00:31:41
 * @Description:    DrawerToggle which appears on the top-left corner
 */
import React from 'react';
import styles from './DrawerToggle.module.css';

const drawerToggle = (props) => (
    // OnClick to make it be clickable and call the drawerToggleHandler to show and unshow the sideDrawer Menu
    <div className={styles.DrawerToggle} onClick={props.clicked}>
        {/* Here is the three line version */}
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToggle;
