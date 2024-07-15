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

  const [rememberUser, setRememberUser] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleRememberUserChange = (event) => {
    setRememberUser(event.target.checked);
  };

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = "Username is required !!";
    }
    if (!formData.password) {
      newErrors.password = "Password is required !!";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters !!";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setTimeout(() => {
        setErrors({});
      }, 1500); // Clear errors after 1.5 seconds
    }
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
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
              <label htmlFor="username" className="mt-3"><b>User ID: </b></label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <span className="error">{errors.username}</span>}
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
              {errors.password && <span className="error">{errors.password}</span>}
            </div>
            <div className="show-password-container">
              <input
                type="checkbox"
                id="show-password"
                checked={showPassword}
                onChange={handleShowPasswordChange}
              />
              <label htmlFor="show-password">Show password</label>
            </div>
            {/* <div>
              <input
                type="checkbox"
                id="rememberUser"
                checked={rememberUser}
                onChange={handleRememberUserChange}
              />
              <label htmlFor="rememberUser">Remember User ID</label>
            </div> */}
            <button type="submit"><b>Login</b></button>
          </form>
        </div>
        {/* <div className="footer">
          <p>Trouble Logging-in?</p>
          <p>Don't have an Account? Sign up</p>
        </div> */}
      </div>
    </>
  );
}

export default Login;