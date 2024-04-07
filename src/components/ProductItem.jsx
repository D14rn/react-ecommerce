import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';


const ProductItem = ({ productName, productPrice }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="/placeholderProductImage.png" />
                <Card.Body>
                    <Card.Title>{productName}</Card.Title>
                </Card.Body>
                <ProductItemForm productPrice={"€" + productPrice} />
            </Card>
        </>
    )
}

export default ProductItem;