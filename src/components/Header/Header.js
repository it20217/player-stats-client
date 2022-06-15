import { Link } from "react-router-dom";
/** Styles */
import styles from "./Header.module.scss";
/** Images */
import Logo from "../../images/TS_Logo.png";

function Header() { 

  return(
    <div className={styles["Header"]}>
      <img src={Logo} alt="Logo"/>
      <div className={styles["btn-container"]}>
        
        <Link 
          to="/login"
          className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-slate-700 hover:border-slate-800 hover:text-white rounded border border-slate-800 text-gray-800 px-6 py-2 text-xs hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100"
        >
          Login
        </Link>
      </div>
      
    </div>
  )
}

export default Header;