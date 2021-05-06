import React from 'react'
import { Nav, Brand, Button, Left } from './style'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <Nav>
            <Link to="/"><Brand>Workspace</Brand></Link>
            <Left>
                <Link to="/login"><Button>Login</Button></Link>
                <Link to="/register"><Button>Register</Button></Link>
            </Left>
        </Nav>
    )
}

export default Navbar
