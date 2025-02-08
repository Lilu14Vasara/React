import React, { useState } from 'react';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import './App.css';

const BackgroundImage =
    'https://images.pexels.com/photos/630772/pexels-photo-630772.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

function App() {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState('USD');
    const [to, setTo] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { currencyRates, currencyList, loading, error } = useCurrencyInfo(from);

    const handleConvert = () => {
        if (currencyRates[to]) {
            setConvertedAmount(amount * currencyRates[to]);
        } else {
            setConvertedAmount(0);
        }
    };

    const handleSwap = () => {
        const temp = from;
        setFrom(to);
        setTo(temp);
    };

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
        >
            <div className="w-full max-w-md mx-auto border border-gray-600 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleConvert();
                    }}
                >
                    {loading ? (
                        <p>Loading currency data...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <>
                            <div className="w-full mb-4">
                                <label>From:</label>
                                <input
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    className="block w-full border px-3 py-2 rounded"
                                />
                                <select
                                    value={from}
                                    onChange={(e) => setFrom(e.target.value)}
                                    className="block w-full border px-3 py-2 rounded mt-2"
                                >
                                    {currencyList.map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="button"
                                onClick={handleSwap}
                                className="block mx-auto mb-4 bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Swap
                            </button>
                            <div className="w-full mb-4">
                                <label>To:</label>
                                <input
                                    type="text"
                                    value={convertedAmount}
                                    readOnly
                                    className="block w-full border px-3 py-2 rounded"
                                />
                                <select
                                    value={to}
                                    onChange={(e) => setTo(e.target.value)}
                                    className="block w-full border px-3 py-2 rounded mt-2"
                                >
                                    {currencyList.map((currency) => (
                                        <option key={currency} value={currency}>
                                            {currency}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                            >
                                Convert {from} to {to}
                            </button>
                        </>
                    )}
                </form>
            </div>
        </div>
    );
}

export default App;
