/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 14:31:00
 * @LastEditTime: 2019-07-26 00:01:33
 * @Description:    A reusable Logo image Component
 *                  Copy the image address to this file 
 *                  since every import will be recorganized after bundle
 */

import React from 'react';
import burgerLogo from '../../Assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = (props) => (
    <div className = {styles.Logo}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
    
);
export default logo;