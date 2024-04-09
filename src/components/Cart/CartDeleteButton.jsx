import { useContext } from "react";
import CartItemsDispatchContext from "../Contexts/CartItemsDispatchContext";
import { Button } from 'react-bootstrap';

const CartDeleteButton = ({product}) => {
    const deleteIcon = '/delete-icon-white.svg';

    const cartDispatch = useContext(CartItemsDispatchContext);

    const handleRemoveCartItem = () => {
        cartDispatch({
            type: "remove",
            item: product,
        })
    }

    return (
        <Button variant="danger" onClick={handleRemoveCartItem}><img src={deleteIcon} style={{height: '2.5ex'}}/></Button>
    )
}

export default CartDeleteButton;