import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
const Admin = () => {

    useEffect(() => {
        document.title = 'Admin'
    })

    const [login, setLogin] = useState(false)


   

    if(login === false){
        return <Redirect to="/login"></Redirect>
    }


    return (
        <div>
            
        </div>
    )
}

export default Admin
