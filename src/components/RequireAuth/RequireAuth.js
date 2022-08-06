import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuth = () => {
    const AuthCtx = useContext(AuthContext);
    const isLoggedIn = AuthCtx.isLoggedIn;
    let location = useLocation();
  
    if (!isLoggedIn) {
      /** Redirect to the login page in case when user is not authenticated */
      return <Navigate to="/login" state={{ from: location }} />;
    }
  
    /** An <Outlet> should be used in parent route elements to render their child route elements. 
     * This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, 
     * it will render a child index route or nothing if there is no index route. */
    return <Outlet />;
};

export default RequireAuth;