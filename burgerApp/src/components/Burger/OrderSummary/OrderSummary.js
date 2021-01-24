import React from 'react'

import Aux from '../../../hoc/Auxilary'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const summary = Object.keys(props.ingredients).map( (ingKey) => {
        return <li key={ingKey}><span style={{textTransform: 'capitalize'}}>{ingKey}</span> : {props.ingredients[ingKey]}</li>
    })
    return(
         <Aux>
             <ul>{summary}</ul>
             <p><strong>Total price: {props.price.toFixed(2)} dolars</strong></p>
             <Button clicked={props.continuePurchasing} btnType="Success">ORDER</Button>
             <Button clicked={props.cancelOrder} btnType="Danger">CANCEL</Button>
         </Aux>
    );
}

export default orderSummary;