import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import CartItemsDispatchContext from '../../Contexts/CartItemsDispatchContext';

const ProductItemForm = ({ product }) => {
    const cartDispatch = useContext(CartItemsDispatchContext);

    const handleAddCartItem = (item, itemCount) => {
        cartDispatch({
            type: "add",
            item: item,
            itemCount: itemCount,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const productAmount = event.target[0].valueAsNumber;
        handleAddCartItem(product, productAmount);
    }

    return (
        <Form className='p-3 bg-body-tertiary' onSubmit={handleSubmit}>
            <Col>
                <Form.Text className="text-muted">
                    {"€" + product.price}
                </Form.Text>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="Amount" min="1" defaultValue="1" />
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