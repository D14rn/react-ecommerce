import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProductItemForm = ({productPrice}) => {
    return (
        <Form className='p-3 bg-body-tertiary'>
            <Col>
                <Form.Text className="text-muted">
                    {productPrice}
                </Form.Text>
                <Row>
                    <Col>
                        <Form.Control type="number" placeholder="Amount" min="0" />
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