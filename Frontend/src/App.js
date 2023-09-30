import React, { Component } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";// Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min";// Bootstrap Bundle JS

import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';


function App() {
  return (
    <div className="App">
      <Router >
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
    </Router> 
    </div>
  );
}

export default App;
