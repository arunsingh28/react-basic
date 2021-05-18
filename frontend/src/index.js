import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'
import store from './Redux/store'
import { Provider } from 'react-redux'

import { loadUser } from './Redux/actions/authAction'


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))