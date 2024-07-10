
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login'}
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/" element={
          <div>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
          </div>
        } />
        
      </Routes>
    </div>
  );
}

export default App;

