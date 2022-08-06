import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../../store/auth-context';
/** Styles */
import styles from "./Header.module.scss";
/** Images */
import Logo from "../../images/Logo.png";

function Header() { 

  const AuthCtx = useContext(AuthContext);
  const isLoggedIn = AuthCtx.isLoggedIn;

  let navigate = useNavigate();
  return(
    <div className={styles["Header"]}>
      <div 
        className={styles["img-container"]} 
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="Logo"/>
      </div>
      <div className={styles["text-logo"]}>
        <h1 className="text-2xl font-bold text-gray-900 pl-7">
          Football<span className="text-2xl font-normal italic"> academy</span> 
        </h1>
      </div>
      <div className={styles["btn-container"]}>
        {isLoggedIn 
          ?
            <button 
              onClick={() => {AuthCtx.logout(); navigate('/')}}
              className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-slate-700 hover:border-slate-800 hover:text-yellow-400 rounded border border-slate-800 text-gray-800 px-10 py-4 text-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100"
            >
              Logout
            </button>
          :
            <Link 
              to="/login"
              className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-slate-700 hover:border-slate-800 hover:text-yellow-400 rounded border border-slate-800 text-gray-800 px-10 py-4 text-sm hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100"
            >
              Login
            </Link>
          }
      </div>
      
    </div>
  )
}

export default Header;