import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import DeviceChosenModal from "../DeviceChosenModal/DeviceChosenModal";
import styles from "./styles.module.scss";
import {
  resetSingleDevice,
  setSingleDevice,
} from "../../store/actions/devices";

const Card = ({ deviceName, imageLink, isAppleClicked, isAndroidClicked }) => {
  const dispatch = useDispatch();
  const [whichIsClicked, setWhichIsClicked] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    dispatch(setSingleDevice({ deviceName, imageLink }));
    setIsModalOpen(true);
  };

  const handleWhichIsCLicked = () => {
    if (isAppleClicked) {
      setWhichIsClicked("Apple");
    }
    if (isAndroidClicked) {
      setWhichIsClicked("Android");
    } else {
      setWhichIsClicked("");
    }
  };

  useEffect(() => {
    handleWhichIsCLicked();
  }, [isAndroidClicked, isAppleClicked]);


  const handleCloseModal = () => {
    setIsModalOpen(false);
    dispatch(resetSingleDevice());
  };

  return (
    <div className={styles.container}>
      <img
        className={styles.deviceImage}
        src={imageLink}
        onClick={handleOpenModal}
      />
      <h1>{deviceName}</h1>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <DeviceChosenModal close={handleCloseModal} whichIsClicked={whichIsClicked} />
      </Modal>
    </div>
  );
};

export default Card;
