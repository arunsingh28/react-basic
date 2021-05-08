import changeTheNumber from './upDown'

import { combineReducers } from 'redux'



// combining the reducer 
// if any new reducer make it will import to this file and add to combineReducers funciton...

const rootReducer = combineReducers({
    changeTheNumber
})

export default rootReducer