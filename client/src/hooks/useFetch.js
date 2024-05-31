import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    
    const fetchNewQuote = async () => {
        setIsLoading(true);
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            setQuote(data.content);
            setAuthor(data.author);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching new quote:", error);
        }
    };

    useEffect(() => {
        
        fetchNewQuote();

    }, [url]);

   
    return { quote, author, fetchNewQuote , isLoading};
};


export default useFetch