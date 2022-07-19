import { useState } from 'react';
/** Styling */
import styles from './ToggleSwitch.module.scss'

function ToggleSwitch(props) {

const [checked, setChecked] = useState(props.checked);


  return(
    <label className={styles["switch"]}>
    <input 
      type="checkbox"
      name="sportswear"
      checked={checked}
      onChange={(e)=> {e.preventDefault(); setChecked(!checked); props.onToggleStatusChange(e.target.checked)}}
    />
    <span className={styles["slider"]}></span>
    </label>
)}

export default ToggleSwitch;