import { RESET_SINGLE_DEVICE, SET_ANDROID_DEVICES, SET_APPLE_DEVICES, SET_SINGLE_DEVICE } from "../consts/devices";



const initialState = {
    androidDevices:{},
    appleDevices:{},
    singleDevice:{}
}

export default (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case SET_ANDROID_DEVICES:
            return {...state, androidDevices: payload}
        case SET_APPLE_DEVICES:
            return {...state, appleDevices: payload}
        case SET_SINGLE_DEVICE:
            return {...state, singleDevice: payload}
        case RESET_SINGLE_DEVICE:
            return {...state, singleDevice: initialState.singleDevice}
        default:
            return state
    }

}