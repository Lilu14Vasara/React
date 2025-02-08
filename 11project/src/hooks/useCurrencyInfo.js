import { useEffect, useState } from 'react';

function useCurrencyInfo(baseCurrency) {
    const [currencyRates, setCurrencyRates] = useState({});
    const [currencyList, setCurrencyList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCurrencyData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
                if (!response.ok) {
                    throw new Error(`Error fetching currency data: ${response.status}`);
                }
                const data = await response.json();
                setCurrencyRates(data.rates);
                setCurrencyList(Object.keys(data.rates)); // List of available currencies
            } catch (err) {
                setError(err.message);
                setCurrencyRates({});
                setCurrencyList([]);
            } finally {
                setLoading(false);
            }
        };

        fetchCurrencyData();
    }, [baseCurrency]);

    return { currencyRates, currencyList, loading, error };
}

export default useCurrencyInfo;
