
/** Styling */
import styles from './ToggleSwitch.module.scss'

function ToggleSwitch({checked, onToggleStatusChange}) {


  return(
    <label className={styles["switch"]}>
    <input 
      type="checkbox"
      name="sportswear"
      checked={checked}
      onChange={()=> {onToggleStatusChange(!checked)}}
    />
    <span className={styles["slider"]}></span>
    </label>
)}

export default ToggleSwitch;