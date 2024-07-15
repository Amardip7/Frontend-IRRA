

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const SquareOff = ({ show, handleClose, stock, handleProceed }) => {
  const [quantity, setQuantity] = useState(stock.positionQuantity || 0);
  const [orderType, setOrderType] = useState('Limit Price');
  const [gtt, setGtt] = useState(false);

  const handleSquareOff = () => {
    // Implement the logic for squaring off the position
    console.log(`Square off stock: ${stock.meta.companyName} with quantity: ${quantity} and order type: ${orderType}`);
    handleProceed(); // Navigate to OrderVerification
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Options Sell Square Off</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control type="text" readOnly value={stock.meta.companyName} />
          </Form.Group>
          <Form.Group controlId="formPositionQuantity">
            <Form.Label>Position Quantity</Form.Label>
            <Form.Control type="text" name="positionquantity" readOnly value={stock.positionQuantity} />
          </Form.Group>
          <Form.Group controlId="formSquareOffQuantity">
            <Form.Label>Square Off Quantity</Form.Label>
            <Form.Control
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formOrderType">
            <Form.Label>Order Type</Form.Label>
            <ToggleButtonGroup type="radio" name="orderType" value={orderType} onChange={setOrderType}>
              <ToggleButton value="Limit Price">Limit Price</ToggleButton>
              <ToggleButton value="Market">Market</ToggleButton>
            </ToggleButtonGroup>
          </Form.Group>
          <Form.Group controlId="formGTT">
            <Form.Check
              type="switch"
              id="gtt-switch"
              label="Square off with GTT"
              checked={gtt}
              onChange={(e) => setGtt(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleSquareOff}>Square Off</Button>
      </Modal.Footer>
    </Modal>
  );
};

SquareOff.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  stock: PropTypes.shape({
    meta: PropTypes.shape({
      companyName: PropTypes.string.isRequired,
    }).isRequired,
    positionQuantity: PropTypes.number.isRequired,
  }).isRequired,
  handleProceed: PropTypes.func.isRequired,
};

export default SquareOff;
