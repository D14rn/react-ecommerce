import { useContext, useEffect, useState } from "react";
import { createProductsUrl } from "../Components/Products/Products";
import { fetchData } from "./useFetchData";
import ProductsContext from "../Contexts/ProductsContext";

const useProducts = (pageNum) => {
    const [cachedProducts, setCachedProducts] = useContext(ProductsContext);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    const updateCachedProducts = (pageNum, products) => {
        const updated = new Map(cachedProducts);
        updated.set(pageNum, products);
        setCachedProducts(updated);
    }

    const fetchProducts = (pageNum) => {
        if (cachedProducts.has(pageNum)) {
            setData(cachedProducts.get(pageNum));
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
        updateCachedProducts(pageNum, data);
    }, [pageNum, data]);

    return [data, loading, error];
}

export default useProducts;