import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing'; 
import './App.css'; // Keep the global styles if they are still needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} /> // Updated component prop to element
          {/* Additional routes can be added here as you create more pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
