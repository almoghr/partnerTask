import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import reduxThunk from 'redux-thunk'
import userReducer from './reducers/auth'
import devicesReducer from './reducers/devices'


const rootReducer = combineReducers({
    auth: userReducer,
    devices: devicesReducer

})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(reduxThunk)))

export default store
