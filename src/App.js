import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Regsiter from './components/form/register'
import Login from './components/form/login'
import Navbar from './components/navbar/index'
import Admin from './components/admin/index'

import './style.css'

const App = () => {

    

    return (
        <BrowserRouter>
            <Navbar />
            <div className="container">
                <Route component={Admin} path="/" exact></Route>
                <Route component={Login} path="/login" exact></Route>
                <Route component={Regsiter} path="/register" exact></Route>
            </div>
        </BrowserRouter>
    )
}

export default App

