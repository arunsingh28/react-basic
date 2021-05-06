import React, { useEffect, useState } from 'react'
import { Form, Container, Button, Input } from './style'

const Login = () => {

    useEffect(()=>{
        document.title = "Login"
    })
 
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const handleData =(e)=>{
        const {name,value} = e.target
        setInput(preVal => {
            return{
                ...preVal,
                [name] : value
            }
        })
    }

    const handleForm =(e)=>{
        e.preventDefault()
        const newData = {
            password : input.password,
            username : input.username
        }
        console.log(JSON.stringify(newData))
    }

    return (
        <Container>
            <Form>
                <p>Login</p>
                <Input
                    name="username"
                    value={input.username}
                    placeholder="Enter username"
                    onChange={handleData}
                />
                <Input
                    name="password"
                    value={input.password}
                    placeholder="Enter password"
                    onChange={handleData}
                />
                <Button onClick={handleForm}>Login</Button>
            </Form>
        </Container>
    )
}

export default Login
