import React from 'react'

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.module.css'

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map( (igKey) => {
        return [...Array(props.ingredients[igKey])]
            .map( (_,i) => {
            return <BurgerIngredients key={igKey + i } type={igKey}/>
        });
    }).reduce((arr, cur) =>{
        return arr.concat(cur);
    }, []);

    if(transformedIngredients.length === 0 ) {
        transformedIngredients = <p>Please add ingredients</p>;
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;