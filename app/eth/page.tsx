import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthPrice = () => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/ethPrice');
        setPrice(response.data.ethereum.usd);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // Optional: Fetch the data at a regular interval
    const intervalId = setInterval(fetchData, 10000); // Fetch every 10 seconds

    // Cleanup
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Ethereum Price</h1>
      {price ? <p>Current price: ${price}</p> : <p>Loading...</p>}
    </div>
  );
};

export default EthPrice;
