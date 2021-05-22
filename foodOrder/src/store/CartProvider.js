import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    console.log("reducer")
    if( action.type === 'ADD_CART_ITEM' ) {
        const updatedState = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        console.log(updatedState)
        return {
            items: updatedState,
            totalAmount: updatedTotalAmount,
        }
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItem = (item) => {
        dispatchCartAction({ type: 'ADD_CART_ITEM', item: item})
    }

    const removeItem = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem:addItem,
        removeItem: removeItem
    }


    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;