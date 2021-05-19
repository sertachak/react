import Header from './components/Layout/Header'
import React, {Fragment, useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
    const [isCartVisible, setCartVisibility] = useState( false );


    return (
    <Fragment>
        <Cart closeModal={setCartVisibility} visible={isCartVisible}/>
        <Header setCartVisibility={setCartVisibility} isCartVisible={isCartVisible}/>
        <Meals/>
    </Fragment>
  );
}

export default App;
