/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 16:00:07
 * @LastEditTime: 2019-07-24 23:15:36
 * @Status: 
 * @Description: Burgur that will be render on the screen
 */
import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngrediant/BurgerIngredient';

const burger = (props) => {
    // An array contains Ingredients
    let transformedIngredients = Object.keys( props.ingredients )
        .map(igKey => {
            // Convert it to array
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => { // store the ingrediant as object to the array
            // Flattened the array, make each ingrediant to object
            return arr.concat(el)
            
        }, []);

    if(transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }     
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burger;