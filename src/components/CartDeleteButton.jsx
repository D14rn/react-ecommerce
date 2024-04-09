import { useContext } from "react";
import CartItemsDispatchContext from "../contexts/CartItemsDispatchContext";

const CartDeleteButton = ({product}) => {
    const deleteIcon = 'delete-icon-active.svg';

    const cartDispatch = useContext(CartItemsDispatchContext);

    const handleRemoveCartItem = () => {
        cartDispatch({
            type: "remove",
            item: product,
        })
    }

    return (
        <button onClick={handleRemoveCartItem}><img src={deleteIcon} style={{height: '2ex'}}/></button>
    )
}

export default CartDeleteButton;