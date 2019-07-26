/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:44:33
 * @LastEditTime: 2019-07-26 00:06:43
 * @Description:    Reusable NavagationItems
 *                  All navigation items for routing
 */

import React from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={styles.NavigationItems}>
       <NavigationItem active link="/">Burger Builder</NavigationItem>
       <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);
export default navigationItems