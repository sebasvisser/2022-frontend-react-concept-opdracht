import { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url, data) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const makeRequest = async () => {
        try {
            const res = await axios.post(url, data);
            setResponse(res);
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        makeRequest();
    }, [makeRequest]);

    return { response, error, setResponse };
};

export default useAxios;

/* gemaakt door chatgpt...*/