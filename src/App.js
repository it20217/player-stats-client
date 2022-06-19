import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import UserPage from './views/UserPage/UserPage';
import SignUp from './views/SignUp/SignUp';
import PlayerManagement from './views/PlayerManagement/PlayerManagement';
import UserManagement from './views/UserManagement/UserManagement';
import EventManagement from './views/EventManagement/EventManagement';

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
        <Route 
            path='/signup' 
            element={<SignUp />} 
          />
        <Route 
            path='/user' 
            element={<UserPage />} 
          />
        <Route 
            path='/userprofile' 
            element={<UserManagement />} 
          />
        <Route 
            path='/playerprofile' 
            element={<PlayerManagement />} 
          />
        <Route 
            path='/events' 
            element={<EventManagement />} 
          />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
