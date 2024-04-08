import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';


const ProductItem = ({ product }) => {
    return (
        <>
            <Card>
                <Card.Img variant="top" src="/placeholderProductImage.png" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                <ProductItemForm product={product} />
            </Card>
        </>
    )
}

export default ProductItem;