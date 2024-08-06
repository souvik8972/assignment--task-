import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Home from './components/Home';
import Layout from './components/Layout';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Profile from './components/Dashboard/Profile';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
      
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    
    </Router>
  );
}
