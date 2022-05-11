import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Container, NavDropdown, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";


function Navigate() {
    return (
        <Navbar className="navbar" bg="dark" expand="lg">
            <Container>
                <div className="header-buttons">
                    <Button className="btn1" variant="warning" size="lg">
                        <Nav.Link as={Link} to="/home">Home Page</Nav.Link>
                    </Button>
                    <Button className="btn2" variant="warning" size="lg">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Button>
                    <Button className="btn3" variant="warning" size="lg">
                        <Nav.Link as={Link} to="/register">Sign Up</Nav.Link>
                    </Button>
                    <Button className="btn4" variant="warning" size="lg">
                        <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                    </Button>
                    <Button className="btn5" variant="warning" size="lg">
                        <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
                    </Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default Navigate;