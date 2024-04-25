import { Badge, Button } from 'react-bootstrap';

const HeaderCartButton = ( {cartItemCount, handleShow} ) => {
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            Your cart 
            <Badge className='mx-1' bg="secondary">{cartItemCount}</Badge>
            <span className="visually-hidden">cart items</span>
        </Button>
        </>
        
    );
}

export default HeaderCartButton;