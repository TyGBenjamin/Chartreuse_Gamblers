import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Container, NavDropdown, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Navigate({ handlePageChange }) {
    return (
        <div>
            <Navbar className="navbar" bg="dark" expand="lg">
                <Container>
                    <div>
                        <Button variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('HomePage')}>Home Page</Nav.Link>
                        </Button>
                        <Button variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Login')}>Login</Nav.Link>
                        </Button>
                        <Button variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('SignUp')}>Sign Up</Nav.Link>
                        </Button>
                        <Button variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Profile')}>Profile</Nav.Link>
                        </Button>
                        <Button variant="warning" size="lg">
                            <Nav.Link onClick={() => handlePageChange('Sports')}>Sports</Nav.Link>
                        </Button>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navigate;