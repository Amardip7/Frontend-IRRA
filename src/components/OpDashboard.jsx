import React, { useState } from 'react';
import {  Button, Form, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import '../css/OpDashboard.css';
// import logo from "../assets/icici_logo.svg"; // Ensure this path is correct

const OpDashboard = () => {
  const [uccId, setUccId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Submitted UCC ID:', uccId);
  };

  return (
    <div className="home-page">
      {/* <Navbar bg="light" className="justify-content-between">
        <Navbar.Brand>
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Button variant="warning" className="logout-btn">LOGOUT</Button>
      </Navbar> */}
      <h2>WELCOME OP USER!!!</h2>
      <Container className="mt-5 text-center">

        <Row className="justify-content-center">
     
          <Col md={6}>
            <Card className="p-4 box-style">
             
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUCCID">
                  <Form.Label>ENTER CUSTOMER UCC ID :</Form.Label>
                  <FormControl
                    type="text"
                    value={uccId}
                    onChange={(e) => setUccId(e.target.value)}
                    className="ucc-input"
                  />
                </Form.Group>
                <Button variant="warning" type="submit" className="submit-btn">SUBMIT</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OpDashboard;
