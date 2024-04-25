import { useContext, useState } from 'react';
import useFetchData from '../../CustomHooks/useFetchData';
import Loader from '../Common/Loader';
import Error from '../Common/Error';
import ProductsPageContext from '../../Contexts/ProductsPageContext';
import './Products.css';
import ProductPagination from './subcomponents/ProductPagination';
import ProductSearch from './subcomponents/ProductSearch';
import ProductList from './subcomponents/ProductList';
import useProducts from '../../CustomHooks/useProducts';

export const createProductsUrl = (pageNum) => {
    return `http://localhost:3000/api/product/?limit=6&page=${pageNum}`;
}

const filterProductName = (products, productName) => {
    const filtered = products.filter(elem => elem.name.toLowerCase().includes(productName.toLowerCase()));
    return filtered;
}

const sortProducts = (products) => {
    if (products) {
        return products.sort((a, b) => a.ratingsAverage < b.ratingsAverage);
    }
    else {
        return [];
    }
}

export const isEmptyArray = (arr) => {
    return arr.length > 0;
}

const Products = () => {
    const [pageNum, setPageNum] = useContext(ProductsPageContext);
    const [data, loading, error] = useProducts(pageNum);
    const [categories, cateLoading, cateError] = useFetchData("http://localhost:3000/api/category");
    const [productNameFilter, setProductNameFilter] = useState("");

    const products = sortProducts(data.products);
    const hasProducts = isEmptyArray(products);

    const filteredProducts = filterProductName(products, productNameFilter);

    if (loading || cateLoading) return <Loader />;
    if (error || cateError) return <Error errorMsg={error.message} />;
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <h2>{(hasProducts) ? `Page ${pageNum}` : "No more products"}</h2>
                <ProductSearch hasProducts={hasProducts} productNameFilter={productNameFilter} setProductNameFilter={setProductNameFilter} />
                <ProductPagination hasProducts={hasProducts} pageNum={pageNum} setPageNum={setPageNum} />
            </div>
            <ProductList products={filteredProducts} categories={categories.categories} />
        </>
    );
}

export default Products;