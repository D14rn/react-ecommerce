import { useParams } from 'react-router-dom';
import { Table, Container, Row, Col } from 'react-bootstrap';
import ProductDetailsTableRow from './subcomponents/ProductDetailsTableRow';
import useFetchData from '../../CustomHooks/useFetchData';
import Loader from '../Common/Loader';
import Error from '../Common/Error';

const ProductDetails = () => {
    const params = useParams();
    const url = `http://localhost:3000/api/product/${params.id}`;

    const [data, loading, error] = useFetchData(url);

    const product = data.product || [];

    if (loading) return <Loader />;
    if (error) return <Error errorMsg={error.message}/>;

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