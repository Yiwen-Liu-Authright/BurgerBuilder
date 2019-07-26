/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 11:36:11
 * @LastEditTime: 2019-07-26 01:48:51
 * @Description:  Reusable UI Component -- Modal
 *                wrapping any content we want to show inside the modal
 */

import React, { Component } from 'react';
import styles from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop';

// add it to the place we want to show
class Modal extends Component {
    // Control the updating of the orderSummary which wrapped by the Modal
    // Only updates if show changes
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    componentWillUpdate() {
        console.log('[Modal] Will Update]');
    }

    render() {
        return (
            <Aux>
                {/* As Backdrop being clicked turn the show to false */}
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div className={styles.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {/* props.children can be anything inside the props */}
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;
