import { Table, Container, Row, Col } from 'react-bootstrap';
import ProductDetailsTableRow from './ProductDetailsTableRow';

const ProductDetails = ( {productImg, productName, productDescription} ) => {
    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center' style={{minWidth: "300px"}}>
                    <img src={productImg} style={{objectFit: "contain", maxWidth: "100%"}}/>
                </Col>
                <Col>
                    <Table striped bordered hover responsive style={{minWidth: "300px"}}>
                        <tbody>
                            <ProductDetailsTableRow rowName={"Name"} rowContent={productName} />
                            <ProductDetailsTableRow rowName={"Description"} rowContent={productDescription} />
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;