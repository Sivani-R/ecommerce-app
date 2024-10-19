import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductListing from './pages/ProductListing';
import ThankYouPage from './pages/ThankYouPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/thank-you/:productName" element={<ThankYouPage />} />
      </Routes>
    </Router>
  );
};

export default App;

