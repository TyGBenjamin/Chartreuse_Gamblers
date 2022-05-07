import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Navigate({ handlePageChange }) {
    return (
        <div>
            <Navbar className="navbar" bg="dark" expand="lg">
                <Container>
                    <div className="buttons">
                        <Button className="btn1" variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('HomePage')}>Home Page</Nav.Link>
                        </Button>
                        <Button className="btn2" variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Login')}>Login</Nav.Link>
                        </Button>
                        <Button className="btn3" variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('SignUp')}>Sign Up</Nav.Link>
                        </Button>
                        <Button className="btn4" variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Profile')}>Profile</Nav.Link>
                        </Button>
                        <Button className="btn5" variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Sports')}>Sports</Nav.Link>
                        </Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigate;