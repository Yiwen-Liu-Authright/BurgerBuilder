/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:44:33
 * @LastEditTime: 2019-07-30 12:11:45
 * @Description:    Reusable NavagationItems
 *                  All navigation items for routing
 */

import React, { Component } from 'react';
import styles from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

class NavigationItems extends Component {

    constructor(props){
        super(props);
        console.log(this.props)
    }
    state = {
        justForTest: false,
    }

    // componentWillReceiveProps() {
    //     console.log("Recieve Props")
    // }
    componentWillMount() {
        this.setState ({
            justForTest: this.props.justForTest,
        })
        console.log('update the NavigationItem: ' + this.state.justForTest)
    }  
    
    render() {
        return (
            <ul className={styles.NavigationItems}>
                <NavigationItem active link="/">Burger Builder</NavigationItem>
                <NavigationItem link="/">Checkout</NavigationItem> 
                {/* {this.qwert} */}
                {/* {console.log(this.state.justForTest)}            */}
            </ul>           
        )

    }
}

export default NavigationItems