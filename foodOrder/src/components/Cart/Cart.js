import {useContext} from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
    const cartCxt = useContext(CartContext);
    const totalAmount = cartCxt.totalAmount.toFixed(2);
    const cartItems = <ul className={classes['cart-items']}>{cartCxt.items.map( (item) => {
        console.log(item)
        return (<CartItem {...item}>{item.name}</CartItem> )
    })}</ul>

    return(
        <Modal visible={props.visible}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={() => props.closeModal(false)} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;