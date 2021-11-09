import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
const Navbars  = () => {
    return(
        <div>
    <Navbar bg="primary" variant="dark">
    <Container>
        <img className ="Logo" src="https://w7.pngwing.com/pngs/587/342/png-transparent-computer-icons-desktop-beauty-soap-text-logo-soap.png" alt="Logo" />
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Navbars