import React, { useState, useEffect } from "react";
import axios from "axios";
import '../css/Commodity.css'; // Add this line to import CSS

const Orders = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>OPEN POSITIONS : </h1>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;