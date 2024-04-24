import { useContext, useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ProductItem from './subcomponents/ProductItem';
import useFetchData from '../../CustomHooks/useFetchData';
import Loader from '../Common/Loader';
import Error from '../Common/Error';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';
import ProductsPageContext from '../../Contexts/ProductsPageContext';
import './Products.css';

function Products() {
    const location = useLocation();
    const navigate = useNavigate();
    const [pageNum, setPageNum] = useContext(ProductsPageContext);

    const [url, setUrl] = useState(`http://localhost:3000/api/product/?limit=6&page=${pageNum}`);
    const [data, loading, error] = useFetchData(url);
    const [categories, cateLoading, cateError] = useFetchData("http://localhost:3000/api/category");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [productNameFilter, setProductNameFilter] = useState("");


    const handleNextPage = () => {
        setPageNum(pageNum + 1);
    };

    const handlePreviousPage = () => {
        const newPage = Math.max(1, pageNum - 1);
        setPageNum(newPage);
    };

    const handleFilterNameChange = (event) => {
        const product_filter = event.target.value;
        setProductNameFilter(product_filter);
    }

    const filterProductName = (products, productName) => {
        const filtered = products.filter(elem => elem.name.toLowerCase().includes(productName.toLowerCase()));
        return filtered;
    }

    const clearFilter = () => {
        setProductNameFilter("");
    }

    useEffect(() => {
        setFilteredProducts(filterProductName(products, productNameFilter));
    }, [productNameFilter])

    useEffect(() => {
        const newUrl = `http://localhost:3000/api/product/?limit=6&page=${pageNum}`;
        if (newUrl !== url) {
            setUrl(newUrl);
            navigate(`/?page=${pageNum}`);
        }
    }, [pageNum]);

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if (Object.keys(parsed).length === 0) {
            navigate(`/?page=${pageNum}`);
            return;
        }
        const parsedPage = parsed.page;
        if (parsedPage < 1) {
            navigate("/?page=1");
            return;
        }
        const newPage = Math.max(1, parseInt(parsedPage)) || 1;
        if (newPage !== pageNum) {
            setPageNum(newPage);
        }
    }, [location.search]);

    useEffect(() => {
        if (data.products) {
            setProducts(data.products.sort((a, b) => a.ratingsAverage < b.ratingsAverage));
        }
        else {
            setProducts([]);
        }
    }, [data]);

    useEffect(() => {
        setFilteredProducts(filterProductName(products, productNameFilter));
    }, [products])

    if (loading || cateLoading) return <Loader />;
    if (error || cateError) return <Error errorMsg={error.message} />;
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <h2>{(products.length > 0) ? `Page ${pageNum}`: "No more products"}</h2>
                {(products.length > 0) &&
                <div className='mb-2'>
                    <label htmlFor="nameSearch">Search by name:</label><br/>
                    <input value={productNameFilter} type='text' onChange={handleFilterNameChange}/>
                    <input value="Clear" type="button" onClick={clearFilter}/>
                    <br/>
                </div>
                }
                <div className='d-flex justify-content-center gap-2'>
                    {(pageNum > 1) &&
                        <Button onClick={handlePreviousPage}>&laquo; {(products.length > 0) ? "Previous": "Go back"}</Button>
                    }
                    {(products.length > 0) &&
                        <Button onClick={handleNextPage}>Next &raquo;</Button>
                    }
                </div>
            </div>
            <Row xs={1} md={2} className="p-2 g-4 mx-auto mt-1" style={{ minWidth: "120px", maxWidth: "800px" }}>
                {filteredProducts.map((currElem, idx) => (
                    <Col key={idx}>
                        <ProductItem product={currElem} categories={categories.categories} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default Products;