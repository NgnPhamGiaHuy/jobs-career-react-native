import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const options = {
        method: "GET",
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            "X-RapidAPI-Key": "40f205bc03msh17c2892be5ed5f9p142054jsn75aadb683a9f",
            "X-RapidAPI-Host": "jsearch.p.rapidapi.com"
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request(options);

            setData(response.data.data);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);

        fetchData();
    }

    return { data, error, isLoading, refetch };
}

export default useFetch;