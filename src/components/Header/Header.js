import { Link, useNavigate } from "react-router-dom";
/** Styles */
import styles from "./Header.module.scss";
/** Images */
import Logo from "../../images/Logo.png";

function Header() { 
  let navigate = useNavigate();
  return(
    <div className={styles["Header"]}>
      <div 
        className={styles["img-container"]} 
        onClick={() => navigate('/')}
      >
        <img src={Logo} alt="Logo"/>
      </div>
      <div className={styles["text-logo"]}>Football academy</div>
      <div className={styles["btn-container"]}>
        
        <Link 
          to="/login"
          className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:bg-slate-700 hover:border-slate-800 hover:text-yellow-400 rounded border border-slate-800 text-gray-800 px-6 py-2 text-xs hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-slate-100"
        >
          Login
        </Link>
      </div>
      
    </div>
  )
}

export default Header;