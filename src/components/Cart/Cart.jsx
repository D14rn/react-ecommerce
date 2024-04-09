import { useContext, useEffect, useState } from "react";
import CartItemsContext from '../Contexts/CartItemsContext';
import HeaderCartButton from "./HeaderCartButton";
import CartModal from "./CartModal";

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [cartItemCount, setCartItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const cartItems = useContext(CartItemsContext);

    useEffect(() => {
        setCartItemCount(cartItems.reduce((accumulator, currElem) => {
            return accumulator + currElem.amount;
        }, 0));

        setTotalPrice(cartItems.reduce((accumulator, currElem) => {
           if ((!isNaN(currElem.price)) && (!isNaN(currElem.amount))) {
               return accumulator + (currElem.price * currElem.amount);
           }
           return accumulator;
        }, 0));
    }, [cartItems]);

    return (
        <>
            <HeaderCartButton handleShow={handleShow} cartItemCount={cartItemCount} />
            <CartModal show={show} handleClose={handleClose} cartItems={cartItems} totalPrice={totalPrice} />
        </>
    )
}

export default Cart;