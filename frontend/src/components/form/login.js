import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Container, Button, Input } from './style'

const Login = () => {

    useEffect(() => {
        document.title = "Login"
    })

    const history = useHistory()

    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    const handleData = (e) => {
        const { name, value } = e.target
        setInput(preVal => {
            return {
                ...preVal,
                [name]: value
            }
        })
    }

    const handleForm = async (e) => {
        e.preventDefault()
        const newData = {
            password: input.password,
            username: input.username
        }
        if (input.username === '' || input.password === '') {
            alert('fill all detail')
        } else {
            const result = await fetch(process.env.REACT_APP_URL + '/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    newData
                })
            }).then(res => res.json())
            
            if (result.status === 'ok') {
                setInput({
                    username: '',
                    password: ''
                })
                localStorage.setItem('token',result.token)
                alert('Login successfull')
                history.push('/')
            } else {
                setInput({
                    username: '',
                    password: ''
                })
                alert(result.error)
            }
        }
    }

    return (
        <Container>
            <Form>
                <p>Login</p>
                <Input
                    type="text"
                    name="username"
                    value={input.username}
                    placeholder="Enter username"
                    onChange={handleData}
                />
                <Input
                    type="password"
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
