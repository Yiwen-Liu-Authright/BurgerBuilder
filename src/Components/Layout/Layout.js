/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 14:51:00
 * @LastEditTime: 2019-07-23 16:38:43
 * @Status: 
 * @Description: 
 */

import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';

const layout = (props) => (
    // json elements, need to be wrap 
    <Aux>
        <div>
            Toolbar, SideDrawer, Backdrop
        </div>
        <main className = { classes.Content }>
            {props.children}
        </main>
    </Aux>
);

export default layout;