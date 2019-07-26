/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 14:51:00
 * @LastEditTime: 2019-07-26 01:11:44
 * @Status: 
 * @Description: 
 */

import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import classes from './Layout.module.css';
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    // sideDrawerClosedHandler = () => {
    //     this.setState({ showSideDrawer: false });
    // }

    // As side Drawer toggle handled, reverse the showSideDrawer
    // Toggle from open to close and the other way around
    // SetState & Map double checked
    sideDrawerToggleHandler = () => {
        // Here is a clean way to setting the state when it depends on the old state
        /*************************************************************** 
        *  Due to the a synchronous nature of setState, if you plan on using/inserting the state, 
        *   you shouldnt't use this.state inside the setState
        *   Instead use the function form, expect the prevState as input,
        *   Simply returned the object that you want to set as a new state or merge into the state
        *   Use the prevState to get passed into this function automatically 
        * *********************************************************************/
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    // json elements, need to be wrap 
    render() {
        return (
            <Aux>
                {/* Show Tool bar when desktop */}
                {/* As In the mobile version, the drawerToggle will be visiable
                    Able to Click and show the sideDrawer Menu */}
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                {/* Side Drawer when mobile, able to open and close the menu*/}
                <SideDrawer
                    opened={this.state.showSideDrawer}
                    closed={this.sideDrawerToggleHandler} />
                {/* The Burger Content to show the burger*/}
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }

}

export default Layout;