import { useState, useEffect } from "react";
import axios from "axios";

export const fetchData = (setLoading, setData, setError, url) => {
    setLoading(true);
    axios.get(url, {timeout: 8000})
    .then((response) => {
        setData(response.data);
    })
    .catch((err) => {
        setError(err);
    })
    .finally(() => {
        setLoading(false);
    })
}

const useFetchData = (url) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData(setLoading, setData, setError, url);       
    }, [url]);

    return [data, loading, error];
}

export default useFetchData;