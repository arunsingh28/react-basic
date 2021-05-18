import changeTheNumber from './upDown'
import userData  from './user.js'
import errorReducer from './errorReducer'
import authReducer from './authReducer'

import { combineReducers } from 'redux'



// combining the reducer 
// if any new reducer make it will import to this file and add to combineReducers funciton...

const rootReducer = combineReducers({
    item: userData,
    error : errorReducer,
    auth : authReducer
})

export default rootReducer