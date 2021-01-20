import React from 'react'
import classes from './BurgerController.module.css'
import BuildControl from '../BurgerController/BuildControl/BuildControl'

const controls = [
    {label:'Salad', type:'salad' },
    {label:'Meat', type:'meat' },
    {label:'Cheese', type:'cheese' },
    {label:'Bacon', type:'bacon' }
]

const burgerController = (props) => {
    return(
        <div className={classes.BurgerController}>
            <p>Total price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map( (control) => {
                return <BuildControl
                    key={control.label}
                    label={control.label}
                    type={control.type}
                    added={() => props.addingIngredients(control.type)}
                    removed={() => props.removingIngredients(control.type)}
                    disabledControl={props.disabledControl[control.type]}/>
            })}
            <button className={classes.OrderButton} disabled={!props.purchasable}>Purchase</button>
        </div>

    );

}

export default burgerController;