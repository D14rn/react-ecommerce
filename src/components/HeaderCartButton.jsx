import { useEffect, useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartItemsTable from './CartItemsTable';
import CartItemsContext from '../contexts/CartItemsContext';

const HeaderCartButton = () => {
    const cartItems = useContext(CartItemsContext);

    useEffect(() => {
        setCartItemCount(cartItems.reduce((accumulator, currElem) => {
            return accumulator + currElem.amount;
        }, 0));

        setTotalPrice(cartItems.reduce((accumulator, currElem) => {
           if ((!isNaN(currElem.price)) && (!isNaN(currElem.amount))) {
               return accumulator + (currElem.price * currElem.amount);
           }
           return accumulator;
        }, 0));
    }, [cartItems]);

    const [cartItemCount, setCartItemCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Your cart 
            <Badge className='mx-1' bg="secondary">{cartItemCount}</Badge>
            <span className="visually-hidden">cart items</span>
        </Button>
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
        
    );
}


export default HeaderCartButton;