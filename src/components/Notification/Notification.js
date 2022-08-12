import React, { useEffect } from 'react';
import styles from './Notification.module.scss';
import { BsCheckCircle } from 'react-icons/bs';
import { BsExclamationTriangleFill } from 'react-icons/bs';
import { BsExclamationCircle } from 'react-icons/bs';
import { BsInfoCircle } from 'react-icons/bs';
import { BsX } from 'react-icons/bs';

const Notification = ({notification, close, delay}) => {

  useEffect(() => {
    if (delay) {
      setTimeout(() => close(), 5000);
    }
  }, [delay, close]);

  return <div className={`${styles.notification} ${styles[notification?.type]}`}>
    <div className={styles.message}>
      <div className={styles["notification-icon"]}>
      {notification?.type === "success" && <BsCheckCircle />}
      {notification?.type === "warning" && <BsExclamationTriangleFill />}
      {notification?.type === "error" && <BsExclamationCircle />}
      {notification?.type === "info" && <BsInfoCircle />}
      </div> 
      <span>{notification?.message}</span>
      <div className={styles["close-icon"]} onClick={() => close()} >
        <BsX />   
      </div>
    </div>
  </div>
}

export default Notification;