import React from 'react';
import { Button, Table } from 'react-bootstrap';
import '../css/OrderVerification.css'; // Ensure you create and import the CSS file

const OrderVerification = ({ stock, handleBack, handleProceed }) => {
  return (
    <div className="order-verification">
      <h1>Order Verification</h1>
      <Table bordered>
        <tbody>
          <tr>
            <td>Action</td>
            <td>Sell</td>
          </tr>
          <tr>
            <td>Product</td>
            <td>Option</td>
          </tr>
          <tr>
            <td>Square Off Quantity</td>
            <td>{stock.positionQuantity}</td>
          </tr>
          <tr>
            <td>Last Traded Price</td>
            <td>{stock.lastPrice}</td>
          </tr>
          <tr>
            <td>Contract Expiry Date</td>
            <td>{stock.contractExpiryDate}</td>
          </tr>
          <tr>
            <td>Exchange</td>
            <td>NSE</td>
          </tr>
          <tr>
            <td>Order Type</td>
            <td>Market</td>
          </tr>
          <tr>
            <td>Estimated Order Value</td>
            <td>{stock.estimatedOrderValue}</td>
          </tr>
          <tr>
            <td>Order Validity</td>
            <td>{stock.orderValidity}</td>
          </tr>
        </tbody>
      </Table>
      <div className="actions">
        <Button variant="secondary" onClick={handleBack}>Back</Button>
        <Button variant="primary" onClick={handleProceed}>Proceed</Button>
      </div>
    </div>
  );
};

export default OrderVerification;
