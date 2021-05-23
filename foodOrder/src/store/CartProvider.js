import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    console.log("reducer")
    if( action.type === 'ADD_CART_ITEM' ) {
        let updatedItems;
        const existingItemIndex = state.items.findIndex( (item) => item.id === action.item.id)
        const existingCartItem = state.items[existingItemIndex];
        if(existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }
            updatedItems = [
                ...state.items
            ];
            updatedItems[existingItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
        console.log(updatedItems)
        return {
            items: updatedItems,
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