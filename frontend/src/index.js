import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'
import store from './Redux/store'
import { Provider } from 'react-redux'

store.subscribe(() => console.log("from Root file "+store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))