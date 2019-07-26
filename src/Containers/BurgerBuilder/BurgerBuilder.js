/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 15:20:24
 * @LastEditTime: 2019-07-25 23:33:48
 * @Description: Build the Burger Page
 */

import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
}

const INITIAL_BURGER_PRICE = 4

class Burgerbuilder extends Component {

    // Burger Ingredients
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: INITIAL_BURGER_PRICE,
        purchaseable: false,
        showModal: false,
    }

    // pass a type as parameter to add ingredient of the burger
    addIngredientHandler = (type) => {
        // this ingredient type's count
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        // Use the immutable way to update the ingredient type's count 
        const updateIngredients = { ...this.state.ingredients };
        updateIngredients[type] = updateCount;
        // Update ingredient's price
        const priceAddition = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        // Update all the change by set state
        this.setState({
            totalPrice: newPrice,
            ingredients: updateIngredients,
        })
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        let updateCount = oldCount;
        let priceDeduction = 0;
        if (updateCount > 0) {
            updateCount = oldCount - 1;
            priceDeduction = INGREDIENTS_PRICE[type];
        }
        const updateIngredients = { ...this.state.ingredients };
        updateIngredients[type] = updateCount;
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ ingredients: updateIngredients, totalPrice: newPrice });
        this.updatePurchaseState(updateIngredients)
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients) //Convert the ingredients to java objects
            .map(igKey => {
                return ingredients[igKey]; // return each ingredient info
            })
            .reduce((sum, el) => {
                return sum + el; // add each ingredient's count to the sum variable
            }, 0); // the initial state is 0
        this.setState({ purchaseable: sum > 0 });
    }

    moduleOpenHandler = () => {
        this.setState({ showModal: true })
    }

    moduleCloseHandler = () => {
        this.setState({ showModal: false })
    }

    // As user click the Cancel Handler, the ingredients will be reset to the initial states
    purchaseCancelledHandler = () => {
        // Clean all the ingredients & price to be initial
        const initialIngredients = { ...this.state.ingredients };
        for (let key in initialIngredients) {
            initialIngredients[key] = 0;
        }
        this.setState({
            ingredients: initialIngredients,
            totalPrice: INITIAL_BURGER_PRICE,
            showModal: false,
        })
    }

    // press continue to checkout
    purchaseContinuedHandler = () => {
        alert("Ready for purchase!");
    }

    // Send the state ingredients as props to the Burger
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            // Passing Children
            <Aux>
                {/* Pass the Modal control properties to the Modal*/}
                <Modal show={this.state.showModal} modalClosed={this.moduleCloseHandler}>
                    {/* passing props */}
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseContinued={this.purchaseContinuedHandler}
                        purchaseCancelled={this.purchaseCancelledHandler}
                        price={this.state.totalPrice}
                    ></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                {/* Pass the ingredientAdded as props to the BuildControls */}
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    showModal={this.moduleOpenHandler}
                    totalPrice={this.state.totalPrice}
                ></BuildControls>
            </Aux>

        )
    }
}

export default Burgerbuilder;