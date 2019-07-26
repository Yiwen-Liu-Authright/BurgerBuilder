/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 19:40:10
 * @LastEditTime: 2019-07-25 23:04:48
 * @Description: A couple of Build Controls
 */

import React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'; // import the single build control

/**
 * @Description: An array of JS objects. Loop all the controls
 * @Return: A const no need for export
 */
const controls = [
    // Style match the Ingredient switch statement
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];


const buildControls = (props) => (
    // Loop each element from the controls to each single BuildControl
    // Where you set up the key be each label and pass the ctrl.label to BuildControl component
    <div className={styles.BuildControls}>
        <p><strong>Burger Price : </strong><strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(ctrl =>
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                // Pass the ingredientAdded to each individual build control
                // Pass the ctrl type as an argument to run the function addIngredientHandler
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientDeleted(ctrl.type)}
                disabled={props.disabled[ctrl.type]} />) // disable the selecting type while the type count <= 0
        }
        <button
            className={styles.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.showModal}
        >ORDER NOW</button>
    </div>
);
export default buildControls;