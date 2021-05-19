import React, { useState } from 'react'
import meals from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {


    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton click={() =>props.setCartVisibility(!props.isCartVisible)}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="A table of food"/>
            </div>
        </React.Fragment>
    );
}

export default Header;