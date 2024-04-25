import { Row, Col } from "react-bootstrap";

import ProductItem from "./ProductItem";

const ProductList = ({ products, categories }) => {
    return (
        <Row xs={1} md={2} className="p-2 g-4 mx-auto mt-1" style={{ minWidth: "120px", maxWidth: "800px" }}>
            {products.map((currElem, idx) => (
                <Col key={idx}>
                    <ProductItem product={currElem} categories={categories} />
                </Col>
            ))}
        </Row>
    )
}

export default ProductList;