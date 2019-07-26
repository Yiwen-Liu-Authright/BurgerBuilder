/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 11:36:11
 * @LastEditTime: 2019-07-25 23:27:34
 * @Description:  Reusable UI Component -- Modal
 *                wrapping any content we want to show inside the modal
 */

import React from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop';

// add it to the place we want to show
const modal = (props) => (

    <Aux>
        {/* As Backdrop being clicked turn the show to false */}
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className={styles.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {/* props.children can be anything inside the props */}
            {props.children}
        </div>
    </Aux>

);

export default modal;
