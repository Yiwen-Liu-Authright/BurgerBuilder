/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 14:51:00
 * @LastEditTime: 2019-07-25 18:05:41
 * @Status: 
 * @Description: 
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: true,
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    // sideDrawerShowHandler

    // json elements, need to be wrap 
    render() {
        return (
            <Aux>
                <Toolbar />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux >
        )
    }

}

export default Layout;