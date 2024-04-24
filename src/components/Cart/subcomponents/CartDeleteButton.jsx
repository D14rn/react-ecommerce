import { useContext } from "react";
import CartContext from "../../../Contexts/CartContext";
import { Button } from 'react-bootstrap';

const CartDeleteButton = ({product}) => {
    const deleteIcon = '/delete-icon-white.svg';

    const [cartItems, cartDispatch] = useContext(CartContext);

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