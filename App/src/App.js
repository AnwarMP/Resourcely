import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing'; 
import Signup from './pages/signup';
import './App.css'; // Keep the global styles if they are still needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/signup" element={<Signup />} /> 
          {/* Additional routes can be added here as you create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
