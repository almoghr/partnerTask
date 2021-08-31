import React from "react";
import Modal from "../Modal/Modal";
import Card from "../Card/Card";
import styles from "./styles.module.scss";

const CardsContainer = ({ devices, isAppleClicked, isAndroidClicked }) => {
  return (
    <div className={styles.cardContainer}>
      {Object.values(devices).map((device) => (
        <Card
          deviceName={device.deviceName}
          imageLink={device.imageLink}
          isAppleClicked={isAppleClicked}
          isAndroidClicked={isAndroidClicked}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
