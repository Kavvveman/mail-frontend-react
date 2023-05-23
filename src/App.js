import './App.css';
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
// import Home from './components/Home';
// import Bookings from './components/Bookings';
// import Profile from './components/Profile';
// import Logout from './components/Logout';


const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
    <Route path="/" element={<LoginUser/>} />
    <Route path="/register" element={<RegisterUser/>} />
    <Route  path="/login" element={<LoginUser/>} />
    <Route  path="/home" element={<RegisterUser/>} />
    {/* <Route  path="/bookings" element={<Bookings/>} />
    <Route  path="/profile" element={<Profile/>} />
    <Route  path="/logout" element={<Logout/>} /> */}
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
