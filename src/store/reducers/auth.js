import { SET_USER_DETAILS } from "../consts/auth";



const initialState = {
    user:{}
}

export default (state=initialState, action) => {
    const {type, payload} = action;

    switch(type){
        case SET_USER_DETAILS:
            return {...state, user: payload}
        default:
            return state
    }

}