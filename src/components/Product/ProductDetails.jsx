import { Table, Container, Row, Col } from 'react-bootstrap';
import ProductDetailsTableRow from './ProductDetailsTableRow';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const fetchProduct = (setProduct, productId) => {
    const url = `http://localhost:3000/api/product/${productId}`;
    axios.get(url)
    .then((response) => {
        setProduct(response.data.product)
    })
}


const ProductDetails = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        console.log("ahaha");
        fetchProduct(setProduct, params.id);
    }, [])

    return (
        <Container>
            <Row>
                <Col className='d-flex justify-content-center' style={{minWidth: "300px"}}>
                    <img src={product.mainImage} style={{objectFit: "contain", maxWidth: "100%"}}/>
                </Col>
                <Col>
                    <Table striped bordered hover responsive style={{minWidth: "300px"}}>
                        <tbody>
                            <ProductDetailsTableRow rowName={"Name"} rowContent={product.name} />
                            <ProductDetailsTableRow rowName={"Description"} rowContent={product.description} />
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetails;