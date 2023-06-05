import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
import Home from './components/Home';
import Bookings from './components/Bookings';
import Profile from './components/Profile';
import Logout from './components/Logout';
import Modal from './components/Modal.jsx';

import BookingsData from './BookingsData';

const App = () =>{
  return (
    <BrowserRouter>
  
    <Routes>
    <Route path="/" element={<LoginUser/>} />
    <Route path="/register" element={<RegisterUser/>} />
    <Route  path="/login" element={<LoginUser/>} />
    <Route  path="/home" element={<Home/>} />
    <Route  path="/bookings" element={<Bookings/>} />
    <Route  path="/profile" element={<Profile/>} />
    <Route  path="/logout" element={<Logout/>} />
    <Route  path="/modal" element={<Modal/>} />
    <div className='App'>
      <BookingsData />
    </div>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
