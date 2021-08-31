import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import styles from './styles.module.scss'
const DeviceChosenModal = ({ close, whichIsClicked }) => {
    
    useEffect(()=>{console.log(whichIsClicked)},[whichIsClicked])

  const singleDevice = useSelector((state) => state.devices.singleDevice);
  const auth = useSelector((state) => state.auth.user);



  return (
    <div className={styles.modalContainer}>
      <p className={styles.modalText}>
        Hello <strong>{auth.username}</strong>! <br/> you have chosen to take a closer
        look on the <br/><strong>{singleDevice.deviceName}</strong> <br/>from the house of <br/>
        <strong>{whichIsClicked}</strong>
      </p>
      <button className={styles.closeBtn} onClick={close}>close</button>
    </div>
  );
};

export default DeviceChosenModal;
