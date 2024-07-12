import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Commodity from './components/Commodity'; 
import Login from './components/Login.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import FuturesandOptions from './components/FuturesandOptions';
import Equity from './components/Equity';
import OpDashboard from './components/OpDashboard';
import SuperDashboard from './components/SuperDashboard';
import Orders from './components/Orders';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const user = {
    username: 'john_doe',
    role: 'superuser' // or 'opuser'
  };

  const getNavLinks = () => {
    switch (location.pathname) {
     
      case '/commodity':
      case '/f&o':
      case '/equity':
      case '/orders':
        return [
          { to: '/commodity', label: 'Commodity' },
          { to: '/f&o', label: 'F&O' },
          { to: '/equity', label: 'Equity' },
          { to: '/orders', label: 'Orders' }
        ];
      default:
        return [];
    }
  };

  return (
    <div>
      {location.pathname !== '/login' && <NavigationBar links={getNavLinks()} />}
      <Routes>
        <Route path="/login" element={<Login />} />
    
        <Route path="/commodity" element={<Commodity />} />
        <Route path="/f&o" element={<FuturesandOptions />} />
        <Route path="/equity" element={<Equity />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/opdashboard" element={<OpDashboard />} />
        <Route path="/superdashboard" element={<SuperDashboard />} />
        <Route path="/" element={
          <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
          </div>
        } />
        <Route path="/dashboard" element={user.role === 'superuser' ? <SuperDashboard /> : <OpDashboard />} />

      </Routes>
    </div>
  );
}

export default App;

