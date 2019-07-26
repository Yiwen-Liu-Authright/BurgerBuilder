/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 16:33:23
 * @LastEditTime: 2019-07-26 00:18:35
 * @Description: Side Drawer Menu with Logo & NavigationItems & Backdrop
 */

import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {

    //...
    let attachedClasses = [styles.SideDrawer, styles.Close]
    if (props.opened) {
        attachedClasses = [styles.SideDrawer, styles.Open];
    }
    return (
        <Aux >
            {/* As long as the Backdrop being clicked the props won't show */}
            <Backdrop show={props.opened} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={styles.Logo}><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>

    );
};

export default sideDrawer;