import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

function Products() {
    const products = [
        { ref: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, amount: 3 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 2", price: 1000, amount: 1 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 3", price: 50, amount: 3 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 4", price: 25, amount: 2 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 5", price: 10, amount: 5 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 6", price: 35, amount: 2 },
        { ref: "30e99341347c49043afec20f701", name: "Produit 7", price: 225, amount: 1 }
    ];

    return (
        <Row xs={1} md={2} className="p-2 g-4 w-50 mx-auto mt-1">
            {products.map((currElem, idx) => (
                <Col key={idx}>
                    <ProductItem productName={currElem.name} productPrice={currElem.price}/>
                </Col>
            ))}
        </Row>
    );
}

export default Products;