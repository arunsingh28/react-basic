import React, { useEffect, useState } from 'react'

import { Form, Input, Button, Container } from './style'

const Sign = () => {

    useEffect(()=>{
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

    const handleSubmit = (e) => {
        e.preventDefault()
        const newInput = {
            username: input.username,
            password: input.password
        }
        console.log(newInput)
        if (input.confirm === '' || input.password === '' || input.username === ''){
            alert('fill all detail')
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
                    onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Sign
