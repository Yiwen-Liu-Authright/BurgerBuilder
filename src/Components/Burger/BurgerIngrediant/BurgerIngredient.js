/*
 * @Comment: Yiwen Liu
 * @Date: 2019-07-23 16:00:58
 * @LastEditTime: 2019-07-23 16:54:38
 * @Description: Know which Ingrediant will be render
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case ('cheese'):
                ingredient = <div className={styles.Cheese}></div>;
                break;
            case ('salad'):
                ingredient = <div className={styles.Salad}></div>;
                break;
            case ('bacon'):
                ingredient = <div className={styles.Bacon}></div>;
                break;
            default:
                ingredient = null;
                break;
        }

        return ingredient;
    }
}

// Import propTypes package
BurgerIngredient.propTypes = {
    //Ask the input be string type
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;