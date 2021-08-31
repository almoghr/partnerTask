import { SET_USER_DETAILS } from "../consts/auth";

export const setUserDetails = (user) => dispatch => {
    dispatch({type: SET_USER_DETAILS, payload: user})
}