import React, {Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerController from '../../components/Burger/BurgerController/BurgerController'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese : 0.4,
    meat : 1.5,
    bacon : 1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice: 4
    }

    addingIngredients = (type) => {
        const oldValue = this.state.ingredients[type];
        const updatedValue = oldValue + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedValue;

        const oldPrice = this.state.totalPrice;
        const additionalCost = INGREDIENT_PRICES[type];
        const newPrice = oldPrice + additionalCost;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
    }

    removingIngredients = (type) => {
        const oldValue = this.state.ingredients[type];
        if(oldValue <= 0) {
            return;
        }
        const updatedIngredients = {
            ...this.state.ingredients
        }
        const updatedValue = oldValue - 1;
        updatedIngredients[type] = updatedValue
        const oldPrice = this.state.totalPrice;
        const removedPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - removedPrice;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    render(){
        let disabledControl = {
            ...this.state.ingredients
        }
        for( let ingredient in disabledControl ) {
            disabledControl[ingredient] = disabledControl[ingredient] <= 0;
        }
        return (
            <Aux>
                <button onClick={() => this.addingIngredients('salad')}>asdasdasd</button>
                <Burger ingredients ={this.state.ingredients}/>
                <BurgerController addingIngredients={this.addingIngredients} removingIngredients={this.removingIngredients} disabledControl={disabledControl}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;

