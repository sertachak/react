import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import CheckoutSummary from '../../components/Checkout/CheckoutSummary/CheckoutSummary'
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {


    constructor(props) {
        super(props);
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        let totalPrice = 0
        for( let param of query.entries()){
            if(param[0] === 'price') {
                totalPrice = param[1]
            }
            else{
                ingredients[param[0]] = +param[1];
            }
        }
        this.state = {ingredients: ingredients, totalPrice: totalPrice}

    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')
    }

    render() {
        return(
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelHandler}
                    checkoutContinued={this.checkoutContinueHandler}/>
                <Route path={this.props.match.path + '/contact-data'}
                       render={ (props) => { return (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} {...props}/> )}}/>
            </div>
        )
    }
}

export default Checkout;

