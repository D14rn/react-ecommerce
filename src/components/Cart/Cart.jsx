import { useContext, useEffect, useState } from "react";

import CartItemsContext from '../../Contexts/CartItemsContext';
import HeaderCartButton from "./subcomponents/HeaderCartButton";
import CartModal from "./subcomponents/CartModal";

export const calculateCartInfo = (cartItems) => {
    const cartInfo = cartItems.reduce((accumulator, currElem) => {
        const itemAmount = currElem.amount;
        const itemPrice = currElem.price;

        if ((!isNaN(itemPrice)) && (!isNaN(itemAmount))) {
            accumulator.itemCount += itemAmount;
            accumulator.totalPrice += itemPrice * itemAmount;
       }
       return accumulator;

    }, {itemCount: 0, totalPrice: 0});

    return cartInfo;
};

const Cart = () => {
    const [show, setShow] = useState(false);

    const cartItems = useContext(CartItemsContext)
    const cartInfo = calculateCartInfo(cartItems);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
    return (
        <>
            <HeaderCartButton handleShow={handleShow} cartItemCount={cartInfo.itemCount} />
            <CartModal show={show} handleClose={handleClose} cartItems={cartItems} totalPrice={cartInfo.totalPrice} />
        </>
    )
};

export default Cart;