import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Login from './views/Login/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
      
    </div>
  );
}

export default App;
