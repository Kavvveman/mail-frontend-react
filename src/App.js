import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginUser from './components/LoginUser';
import RegisterUser from './components/RegisterUser';
//import Index from './index.html';

const App = () =>{
  return (
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
    <Route path="/" element={<LoginUser/>} />
    <Route path="/register" element={<RegisterUser/>} />
    <Route  path="/login" element={<LoginUser/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
