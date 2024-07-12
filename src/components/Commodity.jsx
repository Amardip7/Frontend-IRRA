// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Portfolio = () => {
//   const [stockData, setStockData] = useState([]);

//   useEffect(() => {
//     const fetchStockData = async () => {
//       try {
//         const apiKey = 'LO9Z0B03LSA48ONQ'; // Replace with your actual API key
//         const symbols = ['AAPL', 'MSFT', 'GOOGL'];
//         const promises = symbols.map(symbol =>
//           axios.get(`http://api.marketstack.com/v1/eod/latest`, {
//             params: {
//               access_key: apiKey,
//               symbols: symbol
//             }
//           })
//         );
//         const responses = await Promise.all(promises);
//         const data = responses.map(response => response.data.data[0]);
//         console.log('Fetched stock data:', data);
//         setStockData(data);
//       } catch (error) {
//         console.error('Error fetching stock data:', error);
//         // Handle error state or display an error message
//       }
//     };

//     fetchStockData();
//   }, []);

//   if (stockData.length === 0) {
//     return (
//       <div className="container mt-4">
//         <h1>Loading...</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-4">
//       <h1>Portfolio</h1>
//       <ul>
//         {stockData.map((stock, index) => (
//           <li key={index}>
//             Symbol: {stock.symbol}, Close Price: {stock.close}, High: {stock.high}, Low: {stock.low}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Portfolio;




// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import '../CSS/Commodity.css'; // Add this line to import CSS

// const Commodity = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3003/api/stock-prices");
//         setData(response.data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>OPEN POSITIONS :</h1>
//       <table>
//         <thead>
//           <tr>

//             <th>Contract</th>
//             <th>Position</th>
//             <th>Quantity</th>
//             <th>Avg. Cost Price</th>
//             <th>Buy Order Quantity</th>
//             <th>Sell Order Quantity</th>
//             <th>Spot Price</th>
//             <th>LTP</th>
//             <th>Trigger Price</th>
//             <th> P&L</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((stock) => (
//             <tr key={stock.identifier}>
//               <td>{stock.meta.companyName}</td>
//               <td>{stock.symbol}</td>
//               <td>{stock.lastPrice}</td>
//               <td>{stock.change}</td>
//               <td>{stock.dayHigh}</td>
//               <td>{stock.dayLow}</td>
//               <td>{stock.yearHigh}</td>
//               <td>{stock.yearLow}</td>
//               <td>{stock.lastUpdateTime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Commodity;




import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Commodity.css'; // Add this line to import CSS

const Commodity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/api/stock-prices");
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSquareOff = (stock) => {
    // Handle square off logic here
    console.log("Square off", stock);
    // You can make an API call to square off the position or update the state accordingly
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>OPEN POSITIONS :</h1>
      <table>
        <thead>
          <tr>
            <th>Contract</th>
            <th>Position</th>
            <th>Quantity</th>
            <th>Avg. Cost Price</th>
            <th>Buy Order Quantity</th>
            <th>Sell Order Quantity</th>
            <th>Spot Price</th>
            <th>LTP</th>
            <th>Trigger Price</th>
            <th> P&L</th>
            <th>Actions</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((stock) => (
            <tr key={stock.identifier}>
              <td>{stock.meta.companyName}</td>
              <td>{stock.symbol}</td>
              <td>{stock.lastPrice}</td>
              <td>{stock.change}</td>
              <td>{stock.dayHigh}</td>
              <td>{stock.dayLow}</td>
              <td>{stock.yearHigh}</td>
              <td>{stock.yearLow}</td>
              <td>{stock.lastUpdateTime}</td>
              <td>{stock.yearLow}</td>
              <td>{stock.yearLow}</td>
              <td>
                <button className="square" onClick={() => handleSquareOff(stock)}>Square Off</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Commodity;
