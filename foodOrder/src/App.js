import Header from './components/Layout/Header'
import React, { useState} from "react";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
    const [isCartVisible, setCartVisibility] = useState( false );


    return (
    <CartProvider>
        <Cart closeModal={setCartVisibility} visible={isCartVisible}/>
        <Header setCartVisibility={setCartVisibility} isCartVisible={isCartVisible}/>
        <Meals/>
    </CartProvider>
  );
}

export default App;
