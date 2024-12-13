import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import '../styles/CurrencyConverter.css';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState(null);
  const [toCurrency, setToCurrency] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    // Fetch currency list
    axios
      .get('https://api.exchangerate-api.com/v4/latest/USD')
      .then((response) => {
        const currencyOptions = Object.keys(response.data.rates).map((currency) => ({
          value: currency,
          label: currency,
        }));
        setCurrencies(currencyOptions);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleConvert = () => {
    if (fromCurrency && toCurrency && amount) {
      axios
        .get(`https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`)
        .then((response) => {
          const rate = response.data.rates[toCurrency.value];
          setConvertedAmount((amount * rate).toFixed(2));
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="converter">
      <h2>Convert Your Currency</h2>
      <div className="form-group">
        <label>Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
      </div>
      <div className="form-group">
        <label>From:</label>
        <Select
          options={currencies}
          value={fromCurrency}
          onChange={(selected) => setFromCurrency(selected)}
        />
      </div>
      <div className="form-group">
        <label>To:</label>
        <Select
          options={currencies}
          value={toCurrency}
          onChange={(selected) => setToCurrency(selected)}
        />
      </div>
      <button onClick={handleConvert}>Convert</button>
      {convertedAmount && (
        <div className="result">
          <p>
            {amount} {fromCurrency.label} = {convertedAmount} {toCurrency.label}
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
