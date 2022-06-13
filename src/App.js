import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1 className="text-white text-3xl font-bold underline">
        Hello world!
      </h1>
      
    </div>
  );
}

export default App;
