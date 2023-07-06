import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'reactstrap';
import SwitchTheme from './SwitchTheme';

function CollapsibleExample({ navClass}) {
    return (
        <Navbar className={` ${navClass}`} collapseOnSelect expand="md" variant='dark' >
            <Container>
                <Navbar.Brand href="/"><span>To-Do App </span><sub><span className='px-2 text-dark  rounded rounded bg-light'>Made with React</span></sub></Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                       
                    </Nav>
                    <Nav>
                        
                        <Button className='btn btn-sm' style={{"background":"none", "border":"none","display":"flex","alignItems":"center"}}>
                            <i className="fa-regular fa-sun"></i>

                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <SwitchTheme />
                            </NavDropdown></Button>
                        <NavDropdown title="Important Update" id="collasible-nav-dropdown" >
                           
                            
                            <p className='p-3 '  >
                                    This App is still under devlopment and updation.<br/>
                                For Queries, do contact and give your Feedback.
                                <br />
                                Thank You !!
                                </p>
                     
                        </NavDropdown>
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