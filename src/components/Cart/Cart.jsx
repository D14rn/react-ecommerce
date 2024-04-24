import { useContext, useEffect, useState } from "react";
import CartContext from '../../Contexts/CartContext';
import HeaderCartButton from "./subcomponents/HeaderCartButton";
import CartModal from "./subcomponents/CartModal";

const Cart = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [cartItemCount, setCartItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [cartItems, cartDispatch] = useContext(CartContext);

    useEffect(() => {
        const cartInfo = cartItems.reduce((accumulator, currElem) => {
            const itemAmount = currElem.amount;
            const itemPrice = currElem.price;

            if ((!isNaN(itemPrice)) && (!isNaN(itemAmount))) {
                accumulator.itemCount += itemAmount;
                accumulator.totalPrice += itemPrice * itemAmount;
           }
           return accumulator;

        }, {itemCount: 0, totalPrice: 0});

        setCartItemCount(cartInfo.itemCount);
        setTotalPrice(cartInfo.totalPrice);
    }, [cartItems]);

    return (
        <>
            <HeaderCartButton handleShow={handleShow} cartItemCount={cartItemCount} />
            <CartModal show={show} handleClose={handleClose} cartItems={cartItems} totalPrice={totalPrice} />
        </>
    )
}

export default Cart;