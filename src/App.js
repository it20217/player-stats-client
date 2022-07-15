import { React, useContext } from 'react';
import AuthContext from './store/auth-context';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.scss';
import styles from './App.scss'
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import UserProfile from './views/UserProfile/UserPage';
import SignUp from './views/SignUp/SignUp';
import SignUp2 from './views/SignUp/SignUp2';
import SignUp3 from './views/SignUp/SignUp3';
import PlayerManagement from './views/PlayerManagement/PlayerManagement';
import PlayerProfile from './views/PlayerProfile/PlayerProfile';
import UserManagement from './views/UserManagement/UserManagement';
import EventManagement from './views/EventManagement/EventManagement';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;
  const location = useLocation();
  const path = location.pathname;

  console.log('App.js isLoggedIn',isLoggedIn)
  console.log(location.pathname);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route 
          path='/' 
          element={<Home />} 
        />
      </Routes>

      {!isLoggedIn && 
        <>
          <Routes>
            
            <Route 
                path='/login' 
                element={<Login />} 
              />
            <Route 
                path='/signup' 
                element={<SignUp />} 
              />
            <Route 
                path='/signup_2' 
                element={<SignUp2 />} 
              />
            <Route 
              path='/signup_3' 
              element={<SignUp3 />} 
            />
          </Routes>
        </>
      }
      {isLoggedIn && path !== '/' &&
        <div className='userContainer flex flex-row w-full justify-between'>
          <Sidebar/>
          <div className="w-full">
            <Routes>
              <Route 
                  path='/user' 
                  element={<UserProfile />} 
                />
              <Route 
                  path='/usermanagement' 
                  element={<UserManagement />} 
                />
              <Route 
                  path='/playermanagement' 
                  element={<PlayerManagement />} 
                />
              <Route 
                path='/events' 
                element={<EventManagement />} 
              />
            </Routes>
          </div>
        </div>
      }
      <div>
        
      </div>
      
    </div>
  );
}

export default App;
