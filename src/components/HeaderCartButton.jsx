import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';


const HeaderCartButton = () => {
    return (
        <Button variant="primary">
            Your cart 
            <Badge bg="secondary">4</Badge>
            <span className="visually-hidden">cart items</span>
    </Button>
    );
};

export default HeaderCartButton;