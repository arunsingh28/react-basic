import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS } from './types'

import { returnErrors } from './errorAction'


import axios from 'axios'

export const loadUser = () => (dispatch, getState) => {
    dispatch({ type : USER_LOADING })

    const token = getState().auth.token

    const config = {
        "Content-Type": "application/json"
    }

    if(token){
        config.headers['x-auth-token'] = token
    }
    axios.get(process.env.REACT_APP_URL+'/auth/v2',config)
    .then(res => dispatch({
        type : USER_LOADED,
        payload : res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data,err.response.status))
        dispatch({
            type : AUTH_ERROR
        })
    })
}