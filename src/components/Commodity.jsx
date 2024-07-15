// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import '../css/Commodity.css'; // Add this line to import CSS

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

//   const handleSquareOff = (stock) => {
//     // Handle square off logic here
//     console.log("Square off", stock);
//     // You can make an API call to square off the position or update the state accordingly
//   };

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
//             <th></th>
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
//               <td>{stock.yearLow}</td>
//               <td>{stock.yearLow}</td>
//               <td>
//                 <button className="square" onClick={() => handleSquareOff(stock)}>Square Off</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Commodity;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Table, Button } from "react-bootstrap";
// import SquareOff from "./SquareOff"; // Ensure this path is correct
// import '../css/Commodity.css'; // Add this line to import CSS

// const Commodity = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [selectedStock, setSelectedStock] = useState(null);
//   const [showModal, setShowModal] = useState(false);

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

//   const handleSquareOffClick = (stock) => {
//     setSelectedStock(stock);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedStock(null);
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div>
//       <h1>OPEN POSITIONS :</h1>
//       <Table striped bordered hover>
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
//             <th>P&L</th>
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
//               <td>{stock.yearLow}</td>
//               <td>
//                 <Button variant="danger" onClick={() => handleSquareOffClick(stock)}>Square Off</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//       {selectedStock && (
//         <SquareOff
//           show={showModal}
//           handleClose={handleCloseModal}
//           stock={selectedStock}
//         />
//       )}
//     </div>
//   );
// };

// export default Commodity;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";
import SquareOff from "./SquareOff";
import OrderVerification from "./OrderVerification";
import '../css/Commodity.css';

const Commodity = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStock, setSelectedStock] = useState(null);
  const [currentStep, setCurrentStep] = useState("commodity");

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

  const handleSquareOffClick = (stock) => {
    setSelectedStock(stock);
    setCurrentStep("squareOff");
  };

  const handleBackToCommodity = () => {
    setCurrentStep("commodity");
    setSelectedStock(null);
  };

  const handleProceedToOrderVerification = () => {
    setCurrentStep("orderVerification");
  };

  const handleOrderBack = () => {
    setCurrentStep("squareOff");
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {currentStep === "commodity" && (
        <div>
          <h1>OPEN POSITIONS :</h1>
          <Table striped bordered hover>
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
                <th>P&L</th>
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
               <td>{stock.yearLow}</td>
               <td>
                 <Button variant="danger" onClick={() => handleSquareOffClick(stock)}>Square Off</Button>
              </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
      {currentStep === "squareOff" && selectedStock && (
        <SquareOff
          show={true}
          handleClose={handleBackToCommodity}
          stock={selectedStock}
          handleProceed={handleProceedToOrderVerification}
        />
      )}
      {currentStep === "orderVerification" && selectedStock && (
        <OrderVerification
          stock={selectedStock}
          handleBack={handleOrderBack}
          handleProceed={handleBackToCommodity} // Adjust this based on the final action
        />
      )}
    </div>
  );
};

export default Commodity;
