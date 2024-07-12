import React, { useState } from 'react';
import { Navbar, Button, Form, FormControl, Container, Row, Col, Card } from 'react-bootstrap';
import '../css/ChangePassword.css';
import logo from '../images/Logo.svg'; // Ensure this path is correct

const ChangePassword = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }
    // Handle form submission logic here
    console.log('Password change request:', formData);
  };

  return (
    <div className="change-password-page">
      <Navbar bg="light" className="justify-content-between">
        <Navbar.Brand>
          <img src={logo} alt="Logo" className="logo" />
        </Navbar.Brand>
        <Button variant="warning" className="logout-btn">LOGOUT</Button>
      </Navbar>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 box-style text-left">
              <h2>Change Password</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formCurrentPassword">
                  <Form.Label>Current Password:</Form.Label>
                  <FormControl
                    type={showPassword ? 'text' : 'password'}
                    name="currentPassword"
                    value={formData.currentPassword}
                    onChange={handleChange}
                    className="password-input"
                  />
                </Form.Group>
                <Form.Group controlId="formNewPassword">
                  <Form.Label>New Password:</Form.Label>
                  <FormControl
                    type={showPassword ? 'text' : 'password'}
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="password-input"
                  />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm New Password:</Form.Label>
                  <FormControl
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="password-input"
                  />
                </Form.Group>
                <Form.Group controlId="formShowPassword">
                  <Form.Check
                    type="checkbox"
                    label="Show password"
                    checked={showPassword}
                    onChange={handleShowPasswordChange}
                  />
                </Form.Group>
                <Button variant="warning" type="submit" className="submit-btn">Change Password</Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChangePassword;
