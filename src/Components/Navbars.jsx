import React, {useState, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'


const Navbars  = () => {
  const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();
  const [textButton, setTextButton] = useState('Login')

  const LoginBu = () => {
 
    if(!isAuthenticated){
      setTextButton('Login')
    return loginWithRedirect()
    }else{
      setTextButton('Logout')
      return logout({ returnTo: window.location.origin})
    }
  }


  return(
        <div>
    <Navbar bg="primary" variant="dark">
    <Container>
        
    <Navbar.Brand ><img className ="Logo" src="https://w7.pngwing.com/pngs/587/342/png-transparent-computer-icons-desktop-beauty-soap-text-logo-soap.png" alt="Logo" /></Navbar.Brand>
    <Nav className="me-auto">
      
      <Nav.Link><Link to ='/'>Home</Link></Nav.Link> 
      <Nav.Link><Link to ='/features'>Features</Link></Nav.Link> 
      
    </Nav>
    </Container>
    <button 
    onClick = {LoginBu()}
    className="btn btn-primary">{textButton}</button>
  </Navbar>
        </div>
    )
}

export default Navbars