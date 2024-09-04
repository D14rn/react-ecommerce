import { useContext } from "react";
import { Button } from 'react-bootstrap';

import CartDispatchContext from "../../../Contexts/CartDispatchContext";

const CartDeleteButton = ({product}) => {
    const deleteIcon = '/delete-icon-white.svg';

    const cartDispatch = useContext(CartDispatchContext);

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