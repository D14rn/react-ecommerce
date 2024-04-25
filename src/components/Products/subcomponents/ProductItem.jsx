import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ProductItemForm from './ProductItemForm';

const ProductItem = ({ product, categories }) => {
    const category = categories.find((elem) => {
        return elem._id == product.category;
    });
    return (
        <>
            <Card className={(product.ratingsAverage == 5) && 'rainbow-effect'} title={product.name}>
                <Link className='nav-link' to={`/products/${product.id}`}>
                <Card.Img src={category.image} style={{maxHeight: "50px", objectFit: "contain", right: "30%", position: "absolute"}}/>
                <Card.Img variant="top" src={product.mainImage} style={{maxHeight: "200px", objectFit: "contain"}}/>
                <Card.Body>
                    <Card.Title className='text-truncate'>{product.name}</Card.Title>
                </Card.Body>
                </Link>
                <ProductItemForm product={product} />
            </Card>
        </>
    )
}

export default ProductItem;