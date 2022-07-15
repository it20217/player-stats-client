import React, { useState } from 'react';
import jwtDecode from 'jwt-decode';

const AuthContext = React.createContext({
  isLoggedIn: false,
  profile: null,
  login: () => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('player-stats');
  const [profile, setProfile] = useState(initialToken ? {
    email: initialToken.email,
    exp: initialToken.exp,
    firstName: initialToken.firstName,
    lastName: initialToken.lastName
  } : null);

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
        lastName: profile.lastName
      });
      localStorage.setItem('player-stats', token);
    } catch {
      console.log('!!!! wrong token');
      contextValue.logout();
      localStorage.clear();
    }
  };

  const contextValue = {
    isLoggedIn: isUserLoggedIn,
    profile: profile,
    login: loginHandler,
    logout: logoutHandler
  }

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;