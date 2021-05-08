import React, { useState, useEffect } from 'react'



const Admin = () => {

    const [data, setData] = useState()

    useEffect(() => {
        (async function () {
            document.title = 'Admin'
            try {
                const result = fetch(process.env.REACT_APP_URL + '/admin', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token: localStorage.getItem("token")
                    })
                }).then(res => console.log(res.json()))
                setData(result)
            }
            catch (e) {
                console.log(e)
            }
        })()
    }, [])

    console.log(data)





    return (
        <div>
            {/* { result.data.username } */}
        </div>
    )
}

export default Admin
