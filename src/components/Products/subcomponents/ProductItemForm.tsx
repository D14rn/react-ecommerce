import { Button, Form, Col, Row } from 'react-bootstrap';
import { Dispatch, SyntheticEvent, useContext } from 'react';

import CartItemsContext from '../../../Contexts/CartItemsContext';
import CartDispatchContext from '../../../Contexts/CartDispatchContext';
import { CartAction, CartItem, CartItemList } from '../../../Reducers/cartReducer';

const calculateAvailable = (cartItems: CartItemList, product: CartItem) => {
    const res = cartItems.find((elem) => {
        return elem.id == product.id;
    })

    if (res) {
        return product.quantity - res.amount; 
    }
    return product.quantity;
}


const ProductItemForm = ({ product }: { product: CartItem }) => {
    const cartItems = useContext(CartItemsContext) as CartItemList;
    const cartDispatch = useContext(CartDispatchContext) as Dispatch<CartAction>;

    const handleAddCartItem = (item: CartItem, itemCount: number) => {
        cartDispatch({
            type: "add",
            item: item,
            itemCount: itemCount,
        });
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        const productAmount = ((event.target as HTMLFormElement)[0] as HTMLInputElement).valueAsNumber;
        handleAddCartItem(product, productAmount);
    }

    return (
        <Form className='p-3 bg-body-tertiary' onSubmit={handleSubmit}>
            <Col>
                <Form.Text className="text-muted">
                    {"€" + (product).price}
                </Form.Text>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="Amount" min="1" defaultValue="1" />
                        <Form.Text className='text-muted'>{calculateAvailable(cartItems, product) + " available"}</Form.Text>
                    </Col>
                    <Col>
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </Col>
                </Row>
            </Col>
        </Form>
    )
}

export default ProductItemForm;