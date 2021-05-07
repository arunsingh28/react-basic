import React, { useEffect, useState, } from 'react'
import { Form, Input, Button, Container } from './style'
import { useHistory } from 'react-router-dom'
import { registerSchema } from '../../validation/registraion'

require('dotenv').config()

const Sign = () => {
    
    const history = useHistory()

    useEffect(() => {
        document.title = "Register"
    })


    const [input, setInput] = useState({
        username: '',
        password: '',
        confirm: ''
    })

    const handleData = (e) => {
        const { name, value } = e.target
        setInput(pre => {
            return {
                ...pre,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const newInput = {
            username: input.username,
            password: input.password
        }
        const isValid = await registerSchema.isValid(newInput)

        if (isValid === false) {
            // handle form validation
            alert('not valid data')
        } else {
            // handle form API
            const result = await fetch(process.env.REACT_APP_URL+'/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    newInput
                })
            }).then(res => res.json())
            if (result.status === 'ok') {
                alert('Account Created.')
                setInput({
                    username: '',
                    password: '',
                    confirm: ''
                })
                history.push('/login')
            } else {
                setInput({
                    username: '',
                    password: ''
                })
                alert('Someting went wrong.' + result.error)
            }
        }



    }

    return (
        <Container>
            <Form>
                <p>Register</p>
                <Input
                    type="text"
                    placeholder="Enter Username"
                    name="username"
                    onChange={handleData}
                    value={input.username}
                />
                <Input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    onChange={handleData}
                    value={input.password}
                />
                <Input
                    type="password"
                    name="confirm"
                    value={input.confirm}
                    placeholder="Enter confirm password"
                    onChange={handleData}
                />
                <Button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={input.confirm === '' || input.password.length === '' || input.username.length === ''}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}


export default Sign
