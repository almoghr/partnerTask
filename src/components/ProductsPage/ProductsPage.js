import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";
import CardsContainer from "../CardsContainer/CardsContainer";

const ProductsPage = () => {
  const [isAndroidClicked, setIsAndroidClicked] = useState(false);
  const [isAppleClicked, setIsAppleClicked] = useState(false);

  const appleDevices = useSelector((state) => state.devices.appleDevices);
  const androidDevices = useSelector((state) => state.devices.androidDevices);


  const handleAppleProducts = () => {
    setIsAndroidClicked(false)
    setIsAppleClicked(true)
}
const handleAndroidProducts = () => {
    setIsAppleClicked(false)
    setIsAndroidClicked(true)
}

const handleResetState = () => {
    setIsAppleClicked(false)
    setIsAndroidClicked(false)

}
return (
    <div className={styles.container}>
      <p className={styles.info}>
        are you an Apple person or an Android person? choose one to display the
        related products
      </p>
      <div className={styles.appleVSandroidContainer}>
        <img
          className={styles.imgApple}
          src="https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo-500x313.png"
          onClick={handleAppleProducts}
        />
        <img
          className={styles.imgAndroid}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/511px-Android_robot.svg.png"
          onClick={handleAndroidProducts}
        />
      </div>
      {(isAppleClicked || isAndroidClicked) && <button className={styles.resetBtn} onClick={handleResetState}>RESET</button>}
      {isAppleClicked && <CardsContainer devices={appleDevices} isAppleClicked={isAppleClicked}/>}
      {isAndroidClicked && <CardsContainer devices={androidDevices} isAndroidClicked={isAndroidClicked}/>}
    </div>
  );
};

export default ProductsPage;
