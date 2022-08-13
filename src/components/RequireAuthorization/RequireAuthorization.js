import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

const RequireAuthorization = () => {
    const AuthCtx = useContext(AuthContext);
    const role = AuthCtx?.profile?.role;
    let location = useLocation();
  
    if (role === 3) {
      /** Redirect to the home page in case when a regular user is not authorized to navigate to a page */
      return <Navigate to="/" state={{ from: location }} />;
    }
  
    /** An <Outlet> should be used in parent route elements to render their child route elements. 
     * This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, 
     * it will render a child index route or nothing if there is no index route. */
    return <Outlet />;
};

export default RequireAuthorization;