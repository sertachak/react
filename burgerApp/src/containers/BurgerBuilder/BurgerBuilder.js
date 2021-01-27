import React, {Component} from 'react'
import axios from '../../axios-orders'
import Aux from '../../hoc/Auxilary/Auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerController from '../../components/Burger/BurgerController/BurgerController'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

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
        purchasable: false,
        totalPrice: 4,
        purchasing: false,
        loading: false
    }

    calculatePurchasable(ingredients) {
        const currPurchasable = Object.keys(ingredients).map((ingKey) => {
            return ingredients[ingKey]
        }).reduce((sum,elm) =>{
            return sum + elm;
        },0)

        this.setState({purchasable: currPurchasable > 0})
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
        this.calculatePurchasable(updatedIngredients);
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
        updatedIngredients[type] = oldValue - 1
        const oldPrice = this.state.totalPrice;
        const removedPrice = INGREDIENT_PRICES[type];
        const newPrice = oldPrice - removedPrice;
        this.calculatePurchasable(updatedIngredients);
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
    }

    changePurchasing = () => {
        this.setState({purchasing: true});
    }

    closePurchasing = () => {
        this.setState({purchasing:false})
    }

    continuePurchasing = () => {
        this.setState({loading: true})
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Qamuran',
                address: {
                    street: 'test',
                    zipcode: '06zip'
                },
                email: 'test@test.com'
            }
        }
        axios.post('/orders.json', order )
            .then( response => {
                this.setState({loading: false, purchasing: false})
            })
            .catch( error => {
                this.setState({loading: false, purchasing:false})
            })
    }

    render(){
        let disabledControl = {
            ...this.state.ingredients
        }
        for( let ingredient in disabledControl ) {
            disabledControl[ingredient] = disabledControl[ingredient] <= 0;
        }
        let orderSummary =  <OrderSummary
                                price={this.state.totalPrice}
                                cancelOrder={this.closePurchasing}
                                continuePurchasing={this.continuePurchasing}
                                ingredients={this.state.ingredients}/>
        if(this.state.loading)
        {
            orderSummary =  <Spinner/>
        }

        return (
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <Modal show={this.state.purchasing} closeBackdrop={this.closePurchasing}>
                    {orderSummary}
                </Modal>
                <BurgerController
                    addingIngredients={this.addingIngredients}
                    removingIngredients={this.removingIngredients}
                    disabledControl={disabledControl}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.changePurchasing}/>
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);

