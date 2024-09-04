import { useState, Dispatch, SetStateAction } from 'react';

import './Products.css';
import useFetchData from '../../CustomHooks/useFetchData';
import useProducts, { TProductList, ProductListResponseMap } from '../../CustomHooks/useProducts';
import Loader from '../Common/Loader';
import Error from '../Common/Error';
import ProductPagination from './subcomponents/ProductPagination';
import ProductSearch from './subcomponents/ProductSearch';
import ProductList from './subcomponents/ProductList';
import { AxiosError } from 'axios';

type TProduct = {
    id: number,
    name: string,
    price: number,
    quantity: number,
    ratingsAverage: number,
    mainImage: string,
    category: number,
    description: string,
    amount: number
}

export type { TProduct };

type PageState = [number, Dispatch<SetStateAction<number>>];
type ProductsState = [ProductListResponseMap, Dispatch<SetStateAction<ProductListResponseMap>>]
type ProductsProps = {
    pageState: PageState,
    cachedProductsState: ProductsState
}

export const createProductsUrl = (pageNum: number) => {
    return `http://localhost:3000/api/product/?limit=6&page=${pageNum}`;
}

export const filterProductName = (products: TProductList, productName: string) => {
    const filtered = products?.filter(elem => elem.name.toLowerCase().includes(productName.toLowerCase()));
    return filtered;
}

export const sortProducts = (products: TProductList | null) => {
    if (products) {
        return products.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
    }
    else {
        return [];
    }
}

export const isEmptyArray = (arr: Array<any>) => {
    return arr.length > 0;
}

const Products = ({pageState, cachedProductsState}: ProductsProps) => {
    const [pageNum, setPageNum] = pageState;
    const [data, loading, error] = useProducts(pageNum, cachedProductsState);
    const [categories, cateLoading, cateError] = useFetchData("http://localhost:3000/api/category");
    const [productNameFilter, setProductNameFilter] = useState("");

    const sortedProducts = sortProducts(data.products);
    const hasProducts = isEmptyArray(sortedProducts);
    const filteredProducts = filterProductName(sortedProducts, productNameFilter);

    if (loading || cateLoading) return <Loader />;
    if (error || cateError) return <Error errorMsg={(error as AxiosError).message} />;
    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <h2>{(hasProducts) ? `Page ${pageNum}` : "No more products"}</h2>
                <ProductSearch hasProducts={hasProducts} productNameFilter={productNameFilter} setProductNameFilter={setProductNameFilter} />
                <ProductPagination hasProducts={hasProducts} pageNum={pageNum} setPageNum={setPageNum} />
            </div>
            {/* TODO: Create categories type */}
            <ProductList products={filteredProducts} categories={(categories as any).categories} />
        </>
    );
}

export default Products;