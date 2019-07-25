import React from 'react';
import styles from './Button.module.css'
const button = (props) => (
    // Do the button style with btnType S(success) & D(danger)
    <button
        className={[styles.Button, styles[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);
export default button;