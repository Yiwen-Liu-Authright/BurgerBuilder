/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 12:08:03
 * @LastEditTime: 2019-07-25 12:27:19
 * @Description: 
 */

import React from 'react';
import Aux from '../../hoc/Aux'; // Wrapping the elements

const orderSummary = (props) => {
    // Convert the ingredients to a list of ingredients with igKey
    // use span to wrap and change the igKey to capitalize
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>
                        {igKey}: {props.ingredients[igKey]}
                    </span>
                </li>)
        });
    return (
        // show the whole orderSummary Info window and wrap it with aux
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
        </Aux>
    )
};
export default orderSummary;