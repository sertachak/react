import React, {Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'
import BurgerController from '../../components/Burger/BurgerController/BurgerController'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <BurgerController/>
            </Aux>
        )
    }
}

export default BurgerBuilder;

