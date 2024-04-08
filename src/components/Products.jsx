import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductItem from './ProductItem';

function Products() {
    const products = [
        { ref: "30e99341347c49043afec20f701", name: "Produit 1", price: 100, amount: 3 },
        { ref: "908dbb2b470ed9c51afec20f701", name: "Produit 2", price: 1000, amount: 1 },
        { ref: "1424edffa47c49043afec20f701", name: "Produit 3", price: 50, amount: 3 },
        { ref: "14efaccd547c49043afec20f701", name: "Produit 4", price: 25, amount: 2 },
        { ref: "130bbd14efaccd547afec20f701", name: "Produit 5", price: 10, amount: 5 },
        { ref: "30ddbaafec20f7014efaccd5421", name: "Produit 6", price: 35, amount: 2 },
        { ref: "efaccd547c4904904ec20f701ab", name: "Produit 7", price: 225, amount: 1 }
    ];

    return (
        <Row xs={1} md={2} className="p-2 g-4 w-50 mx-auto mt-1">
            {products.map((currElem, idx) => (
                <Col key={idx}>
                    <ProductItem product={currElem} />
                </Col>
            ))}
        </Row>
    );
}

export default Products;