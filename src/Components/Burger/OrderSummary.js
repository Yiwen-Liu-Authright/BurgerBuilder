/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 12:08:03
 * @LastEditTime: 2019-07-25 23:29:38
 * @Description: All the Order Summary Info which whill be wrapped inside the modal
 */

import React from 'react';
import Aux from '../../hoc/Aux'; // Wrapping the elements
import Button from '../UI/Button/Button';

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
            {/* Order Summary Info Show Up */}
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            {/* Button to cancel or checkout */}
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>CHECKOUT</Button>
        </Aux>
    )
};
export default orderSummary;