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
import ProductPagination from './subcomponents/ProductPagination';
import ProductSearch from './subcomponents/ProductSearch';
import ProductList from './subcomponents/ProductList';



const createProductsUrl = (pageNum) => {
    return `http://localhost:3000/api/product/?limit=6&page=${pageNum}`;
}

const navigateToPage = (navigate, pageNum) => {
    navigate(`/?page=${pageNum}`);
}

const Products = () => {
    let products;
    let filteredProducts;
    const location = useLocation();
    const navigate = useNavigate();
    const [pageNum, setPageNum] = useContext(ProductsPageContext);

    const [url, setUrl] = useState(createProductsUrl(pageNum));
    const [data, loading, error] = useFetchData(url);
    const [categories, cateLoading, cateError] = useFetchData("http://localhost:3000/api/category");
    const [productNameFilter, setProductNameFilter] = useState("");

    const filterProductName = (products, productName) => {
        const filtered = products.filter(elem => elem.name.toLowerCase().includes(productName.toLowerCase()));
        return filtered;
    }

    useEffect(() => {
        const newUrl = createProductsUrl(pageNum);
        if (newUrl !== url) {
            setUrl(newUrl);
            navigateToPage(navigate, pageNum);
        }
    }, [pageNum]);

    useEffect(() => {
        const parsed = queryString.parse(location.search);
        if (Object.keys(parsed).length === 0) {
            navigateToPage(navigate, pageNum);
            return;
        }
        const parsedPage = parsed.page;
        if (parsedPage < 1) {
            navigateToPage(navigate, 1);
            return;
        }
        const newPage = Math.max(1, parseInt(parsedPage)) || 1;
        if (newPage !== pageNum) {
            setPageNum(newPage);
        }
    }, [location.search]);

    if (data.products) {
        products = data.products.sort((a, b) => a.ratingsAverage < b.ratingsAverage);
    }
    else {
        products = [];
    }
    const hasProducts = products.length > 0;

    filteredProducts = filterProductName(products, productNameFilter);

    if (loading || cateLoading) return <Loader />;
    if (error || cateError) return <Error errorMsg={error.message} />;
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <h2>{(hasProducts) ? `Page ${pageNum}` : "No more products"}</h2>
                <ProductSearch hasProducts={hasProducts} productNameFilter={productNameFilter} setProductNameFilter={setProductNameFilter}/>
                <ProductPagination hasProducts={hasProducts} pageNum={pageNum} setPageNum={setPageNum}/>
            </div>
            <ProductList products={filteredProducts} categories={categories.categories}/>
        </>
    );
}

export default Products;