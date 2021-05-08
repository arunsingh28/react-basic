import React from 'react'
import { Nav, Brand, Button, Left } from './style'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const myState = useSelector((state)=> state.changeTheNumber)

    return (
        <Nav>
            <Link to="/"><Brand>Workspace</Brand></Link>
            <Left>
                <Link to="/login"><Button>Login {myState}</Button></Link>
                <Link to="/register"><Button>Register</Button></Link>
                <Link to="/counter"><Button>Counter</Button></Link>
            </Left>
        </Nav>
    )
}

export default Navbar


