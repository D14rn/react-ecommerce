import Card from 'react-bootstrap/Card';
import ProductItemForm from './ProductItemForm';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
    return (
        <>
            <Card className={(product.ratingsAverage == 5) && 'rainbow-effect'}>
                <Link className='nav-link' to={`/products/${product.id}`}>
                <Card.Img variant="top" src={product.mainImage} style={{maxHeight: "200px", objectFit: "contain"}}/>
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