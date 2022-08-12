import { React, useContext, useState, useEffect } from 'react';
import AuthContext from './store/auth-context';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.module.scss';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import UserProfile from './views/UserProfile/UserPage';
import Notification from './components/Notification/Notification';
import SignUp from './views/SignUp/SignUp';
import PlayerManagement from './views/PlayerManagement/PlayerManagement';
import PlayerProfile from './views/PlayerProfile/PlayerProfile';
import PlayerEvaluation from './views/PlayerEvaluation/PlayerEvaluation';
import RequireAuth from './components/RequireAuth/RequireAuth';
import UserManagement from './views/UserManagement/UserManagement';
import EventManagement from './views/EventManagement/EventManagement';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;
  const location = useLocation();
  const path = location.pathname;

  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notification, setNotification] = useState({
    type: '',
    message: ''
  });

  useEffect(() => {
    setNotification({
      type: AuthCtx.notification?.type || 'info',
      message: AuthCtx.notification?.message || '',
      delay: AuthCtx.notification?.delay || 5000
    });
    if (AuthCtx.notification) {
      setNotificationOpen(true);
    }
  }, [AuthCtx.notification]);

  return (
    <div className='App'>
      <Header/>
      <div className='userContainer flex flex-row w-full justify-between'>
        {isLoggedIn && path !== '/' &&<Sidebar/>}
          <div className="w-full">
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
              <Route element={<RequireAuth />}>
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
                  path='/player/:id' 
                  element={<PlayerProfile />} 
                /> 
                <Route 
                  path='/events' 
                  element={<EventManagement />} 
                />
                <Route 
                  path='/playerevaluation' 
                  element={<PlayerEvaluation />} 
                />
                <Route 
                  path='/playerevaluation/:eventId' 
                  element={<PlayerEvaluation />} 
                />
                <Route 
                  path='/playerevaluation/:eventId/assignment/:assignmentId' 
                  element={<PlayerEvaluation />} 
                />
                <Route 
                  path='/playerevaluation' 
                  element={<PlayerEvaluation />} 
                />
              </Route>
            </Routes>
          </div>
      </div>
      {notificationOpen && 
        <Notification 
          notification={notification} 
          delay={notification.type === 'info' || notification.type === 'success' ? 5000 : null} 
          close={() => {setNotificationOpen(false); setNotification({
            type: '',
            message: ''
          })}} 
        />
      }
    </div>
  );
}

export default App;
