import React, { useState } from 'react';
import '../css/Login.css';
import logo from '../images/Logo.svg';
import { logindata } from '../services/LoginService';

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    loginType: "opuser" // default value can be set here
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await logindata(formData);
      console.log(response);
      setFormData({
        username: "",
        password: "",
        loginType: "opuser" // reset to default value
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {}
      <div>
        <div className="logo1 mt-5">
          <img src={logo} alt="QR Code" />
        </div>
        <div className="login-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="loginType"><b>Login Type: </b></label>
              <select
                id="loginType"
                name="loginType"
                value={formData.loginType}
                onChange={handleChange}
                className="large-dropdown"
              >
                <option value="superuser">Super User</option>
                <option value="opuser">Op User</option>
              </select>
            </div>
            <div>
              <label htmlFor="username"  class="mt-3"><b>User ID: </b></label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password"><b>Password / PIN: </b></label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={handleShowPasswordChange}
              />
              <label htmlFor="show-password">Show password</label>
            </div>
            <button type="submit"><b>Login</b></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
