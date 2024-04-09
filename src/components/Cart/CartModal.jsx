import { Row, Col, Button, Modal} from 'react-bootstrap';
import CartItemsTable from './CartItemsTable';

const CartModal = ({cartItems, totalPrice, show, handleClose}) => {
    return (
        <>
            <Modal size='lg' show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CartItemsTable cartItems={cartItems} />
                    <Row className='fs-4'>
                        <Col>
                            <b>Total Amount</b>
                        </Col>
                        <Col className='text-end'>
                            <b>{totalPrice}€</b>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Order
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CartModal;