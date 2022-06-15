import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Routes>
        <Route 
            path='/' 
            element={<Home />} 
          />
        <Route 
            path='/login' 
            element={<Login />} 
          />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
