import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';
import { useEffect, useState } from 'react';
import axios from "axios";


const fetchProducts = (setProducts, pageNum) => {
    const url = `http://localhost:3000/api/product/?page=${pageNum}`
    axios.get(url)
    .then((response) => {
        const products = response.data.products
        setProducts(products);
    })
}

function Products() {
    const [pageNum, setPageNum] = useState(1)
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts(setProducts, pageNum);
    }, [pageNum])

    return (
        <Row xs={1} md={2} className="p-2 g-4 mx-auto mt-1" style={{minWidth: "120px", maxWidth: "800px"}}>
            {products.map((currElem, idx) => (
                <Col key={idx}>
                    <ProductItem product={currElem} />
                </Col>
            ))}
        </Row>
    );
}

export default Products;