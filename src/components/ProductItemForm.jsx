import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import CartItemsContext from '../contexts/CartItemsContext';


const ProductItemForm = ({product}) => {

    const handleSubmit = (event) => {
        const form = event.target;
        const productAmount = form[0].valueAsNumber;
        console.log("Produit:", product);
        console.log("Nombre de produits à ajouter:", productAmount);
        handleAdd(product, productAmount);
    }

    const handleAdd = useContext(CartItemsContext);

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