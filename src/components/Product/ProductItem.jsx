import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';
import { Link } from 'react-router-dom';


const ProductItem = ({ product }) => {
    return (
        <>
            <Card>
                <Link className='nav-link' to={`/products/${product.ref}`}>
                <Card.Img variant="top" src="/placeholderProductImage.png" />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                </Card.Body>
                </Link>
                <ProductItemForm product={product} />
            </Card>
        </>
    )
}

export default ProductItem;