import React, {Component} from 'react'
import Aux from '../../hoc/Auxilary'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            cheese: 2,
            bacon: 2
        }
    }

    render(){
        return (
            <Aux>
                <Burger ingredients ={this.state.ingredients}/>
                <div>BurgerController</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;

