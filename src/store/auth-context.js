import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = React.createContext({
  isLoggedIn: false,
  profile: null,
  notification: null,
  login: () => {},
  logout: () => {},
  notify: () => {}
});

// Check if token is expired 
const isTokenValid = (initialToken) => {
  let token = null;
  try {
    token = jwtDecode(initialToken);
  } catch {
    return false;
  }
  const now = Math.floor(new Date().getTime()/1000);
  return now < token.exp;
}

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('player-stats');
  let initialProfile =  null;
  // Extract profile from jwt token if there is a token in local storage and it is not expired 
  if (initialToken) {
    // Check if token is expired 
    if (isTokenValid(initialToken)) {
      const token = jwtDecode(initialToken);
      initialProfile = {
        email: token.email,
        exp: token.exp,
        firstName: token.firstName,
        lastName: token.lastName,
        userId: token.id,
        role: token.role
      }
    } else {
      localStorage.clear();
    }
  }
  const [profile, setProfile] = useState(initialProfile);
  const [notification, setNotification] = useState(null);

  //double exclamation sign converts a falsy value to boolean

  const isUserLoggedIn = !!profile;

  const logoutHandler = () => {
    setProfile(null);
    localStorage.clear();
  };

  const loginHandler = (token) => {
    try {
      const profile = jwtDecode(token);
      setProfile({
        email: profile.email,
        exp: profile.exp,
        firstName: profile.firstName,
        lastName: profile.lastName,
        userId: profile.id,
        role: profile.role
      });
      localStorage.setItem('player-stats', token);
    } catch {
      localStorage.clear();
    }
  };

  const notificationHandler = (notification) => {
    setNotification(notification)
  }

  const contextValue = {
    isLoggedIn: isUserLoggedIn,
    profile: profile,
    notification: notification,
    login: loginHandler,
    logout: logoutHandler,
    notify: notificationHandler
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;