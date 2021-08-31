import {
  SET_ANDROID_DEVICES,
  SET_APPLE_DEVICES,
  SET_SINGLE_DEVICE,
  RESET_SINGLE_DEVICE,
} from "../consts/devices";

export const setAndroidDevices = (androidDevices) => (dispatch) => {
  dispatch({ type: SET_ANDROID_DEVICES, payload: androidDevices });
};

export const setAppleDevices = (appleDevices) => (dispatch) => {
  dispatch({ type: SET_APPLE_DEVICES, payload: appleDevices });
};

export const setSingleDevice = (singleDevice) => (dispatch) => {
  dispatch({ type: SET_SINGLE_DEVICE, payload: singleDevice });
};

export const resetSingleDevice = () => (dispatch) => {
  dispatch({ type: RESET_SINGLE_DEVICE });
};
