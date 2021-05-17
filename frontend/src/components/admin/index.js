import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { userAdd } from '../../Redux/actions/index'
// import  userData from '../../Redux/reducers/user'

const Admin = () => {
    const dispatch = useDispatch()
    
    const user = useSelector((state)=>state.userData)

    console.log("user from admi file "+JSON.stringify(user))

    useEffect(() => {
        (async function () {
            // document.title = user ? user.data.username : 'Admin' 
            try {
                fetch(process.env.REACT_APP_URL + '/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: localStorage.getItem("token")
                    })
                }).then(res => res.json())
                .then(all => dispatch(userAdd(all)))
            }
            catch (e) {
                console.log(e)
            }
        })()
    }, [document.title])


    return (
        <div>
            Hello 
        </div>
    )
}

export default Admin
