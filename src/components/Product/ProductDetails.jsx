import { Row, Col } from 'react-bootstrap';

const ProductDetails = ( {productImg, productName, productDescription} ) => {    
    return (
        <Row xs={1} md={2} className="p-2 g-4 mx-auto mt-1">
            <Col>
                <img src={productImg} />
                <Row>
                    <Col>Name</Col>
                    <Col>{productName}</Col>
                </Row>
                <Row>
                    <Col>Description</Col>
                    <Col>{productDescription}</Col>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductDetails;