/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-25 12:08:03
 * @LastEditTime: 2019-07-26 02:02:08
 * @Description:    All the Order Summary Info which whill be wrapped inside the modal
 *                  This can be a functional Component, change it to class just for debug purpose
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux/Aux'; // Wrapping the elements
import Button from '../UI/Button/Button';

// Change orderSummary to the class so that can add the life cycle on it
class OrderSummary extends Component {
    // Life Cycle to se the re-render
    componentWillUpdate() {
        console.log('[Order Summary] Will Update');
    }

    // Convert the ingredients to a list of ingredients with igKey
    // use span to wrap and change the igKey to capitalize
    render() {
        const ingredientsSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{ textTransform: 'capitalize' }}>
                            {igKey}: {this.props.ingredients[igKey]}
                        </span>
                    </li>)
            });
        return (
            // show the whole orderSummary Info window and wrap it with aux
            <Aux>
                {/* Order Summary Info Show Up */}
                < h3 > Your Order</h3 >
                <p>A delicious burger with the following ingredients: </p>
                <ul>
                    {ingredientsSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                {/* Button to cancel or checkout */}
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CHECKOUT</Button>
            </Aux >
        )
    }


};
export default OrderSummary;