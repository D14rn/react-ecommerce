import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { createProductsUrl, TProduct } from "../Components/Products/Products";
import { fetchData } from "./useFetchData";
import { AxiosError } from "axios";


type TProductList = TProduct[] | undefined;
type ProductListResponseMap = Map<number, ProductListResponse>;
type ProductListResponse = {
    products?: TProductList
}

type useProductsReturn = [
    ProductListResponse,
    boolean,
    AxiosError | null
]

export type { TProductList, ProductListResponseMap, ProductListResponse };

const useProducts = (pageNum: number, cachedProductsState: [ProductListResponseMap, Dispatch<SetStateAction<ProductListResponseMap>>]): useProductsReturn => {
    const [cachedProducts, setCachedProducts] = cachedProductsState;
    const [data, setData] = useState<ProductListResponse>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    const updateCachedProducts = (pageNum: number, products: ProductListResponse) => {
        const updated = new Map(cachedProducts);
        updated.set(pageNum, products);
        setCachedProducts(updated);
    }

    const fetchProducts = (pageNum: number) => {
        if (cachedProducts.has(pageNum)) {
            setData(cachedProducts.get(pageNum) as ProductListResponse);
            setLoading(false);
        }
        else {
            const url = createProductsUrl(pageNum);
            fetchData(setLoading, setData, setError, url);
        }
    };

    useEffect(() => {
        fetchProducts(pageNum);
    }, [pageNum])

    useEffect(() => {
        updateCachedProducts(pageNum, data as ProductListResponse);
    }, [pageNum, data]);

    return [data, loading, error];
}

export default useProducts;