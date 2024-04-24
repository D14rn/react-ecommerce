import { useContext, useState } from 'react';
import useFetchData from '../../CustomHooks/useFetchData';
import Loader from '../Common/Loader';
import Error from '../Common/Error';
import ProductsPageContext from '../../Contexts/ProductsPageContext';
import './Products.css';
import ProductPagination from './subcomponents/ProductPagination';
import ProductSearch from './subcomponents/ProductSearch';
import ProductList from './subcomponents/ProductList';

const createProductsUrl = (pageNum) => {
    return `http://localhost:3000/api/product/?limit=6&page=${pageNum}`;
}

const filterProductName = (products, productName) => {
    const filtered = products.filter(elem => elem.name.toLowerCase().includes(productName.toLowerCase()));
    return filtered;
}

const Products = () => {
    let products;
    let filteredProducts;
    const [pageNum, setPageNum] = useContext(ProductsPageContext);

    const [url, setUrl] = useState(createProductsUrl(pageNum));
    const [data, loading, error] = useFetchData(url);
    const [categories, cateLoading, cateError] = useFetchData("http://localhost:3000/api/category");
    const [productNameFilter, setProductNameFilter] = useState("");


    const newUrl = createProductsUrl(pageNum);
    if (newUrl !== url) {
        setUrl(newUrl);
    }

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