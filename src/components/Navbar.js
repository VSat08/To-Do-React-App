import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'reactstrap';
import SwitchTheme from './SwitchTheme';

function CollapsibleExample({ navClass}) {
    return (
        <Navbar className={` ${navClass}`} collapseOnSelect expand="lg" variant='dark' >
            <Container>
                <Navbar.Brand href="/">To-DO</Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    <Nav>
                        
                        <Button className='btn btn-sm' style={{"background":"none", "border":"none","display":"flex","alignItems":"center"}}>
                            <i className="fa-regular fa-sun"></i>

                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <SwitchTheme />
                        </NavDropdown></Button>
                        <Nav.Link eventKey={2} href="https://github.com/VSat08">
                            About Author
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/satyam-verma-10416722a/"><i className="fa-brands fa-linkedin" ></i></Nav.Link>
                        <Nav.Link eventKey={2} href="https://github.com/VSat08">
                            <i className="fa-brands fa-github" ></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;