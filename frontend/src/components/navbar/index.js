import React,{useState} from 'react'
import { Nav, Brand, Button, Left } from './style'
import { Link,useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const myState = useSelector((state) => state.userData)
    
    const [auth,setAuth] = useState(false)

    

    return (
        <Nav>
            <Link to="/"><Brand>Workspace</Brand></Link>
            <Left>
                {
                    myState ? <Islogout/> : <IsLogin/>  
               }
                <Link to="/counter"><Button>Counter</Button></Link>
            </Left>
        </Nav>
    )
}

export default Navbar


const IsLogin = () => {
    return (
        <>
        <Link to="/login"><Button>Login</Button></Link>
        <Link to="/register"><Button>Register</Button></Link>
        </>
    )
}

const Islogout = () =>{
    const history = useHistory()
    return(
        <>
        <Link to="/"><Button>Profile</Button></Link>
        <Link><Button onClick={()=>{
            localStorage.clear()
            history.push('/')
        }}>Logout</Button></Link>
        </>
    )
}
