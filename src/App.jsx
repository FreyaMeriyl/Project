import React from 'react';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Form from './pages/Form';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="form" element={<Form/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}
