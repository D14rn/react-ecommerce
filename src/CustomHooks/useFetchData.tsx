import { useState, useEffect, SetStateAction, Dispatch } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

export const fetchData = (setLoading: Dispatch<SetStateAction<boolean>>, setData: Dispatch<SetStateAction<AxiosResponse["data"]>>, setError: Dispatch<SetStateAction<AxiosError<any, null> | null>>, url: string) => {
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

const useFetchData = (url: string) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);

    useEffect(() => {
        fetchData(setLoading, setData, setError, url);       
    }, [url]);

    return [data, loading, error];
}

export default useFetchData;