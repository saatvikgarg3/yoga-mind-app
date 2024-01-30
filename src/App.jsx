// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { PackageProvider } from './context/PackageContext';
import Login from './pages/Login';
import Home from './pages/Home';
import Product from './pages/Product';
import BatchandSlot from './pages/BatchandSlot';

const App = () => {
  return (
    <PackageProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/batchandslot" element={<BatchandSlot/>} />
      </Routes>
    </Router>
    </PackageProvider>
  );
};

export default App;
