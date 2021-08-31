import { setUserDetails } from "../store/actions/auth";
import { setAndroidDevices, setAppleDevices } from "../store/actions/devices";

export const dataLoader = (db, dispatch) => {
  db.map((info) => {
    dispatch(setUserDetails(info.user));
    dispatch(setAndroidDevices(info.androidDevices));
    dispatch(setAppleDevices(info.appleDevices));
  });
};
