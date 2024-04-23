import { useState, useEffect } from "react";
import axios from "axios";

const fetchData = (setLoading, setData, setError, url) => {
    setLoading(true);
    axios.get(url)
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