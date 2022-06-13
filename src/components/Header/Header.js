/** Styles */
import styles from "./Header.module.scss";
/** Images */
import Logo from "../../images/TS_Logo.png";

function Header() {

  return(
    <div className={styles["Header"]}>
      <img src={Logo} alt="Logo"/>
      
    </div>
  )
}

export default Header;