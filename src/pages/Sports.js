import React from 'react';
import { Container, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Link } from 'react-router-dom';

function Sports() {
    return (
        <div className="sports-page">
            <div className="row text-center">
                <Button className="col-xs-12 col-md-6 btn6" variant="warning" size="lg">
                    <Nav.Link as={Link} to="/MLB">MLB</Nav.Link>
                </Button>
                <Button className="col-xs-12 col-md-6 btn7" variant="warning" size="lg">
                    <Nav.Link as={Link} to="/NBA">NBA</Nav.Link>
                </Button>
                <Button className="col-xs-12 col-md-6 btn8" variant="warning" size="lg">
                    <Nav.Link as={Link} to="/NFL">NFL</Nav.Link>
                </Button>
                <Button className="col-xs-12 col-md-6 btn9" variant="warning" size="lg">
                    <Nav.Link as={Link} to="/NHL">NHL</Nav.Link>
                </Button>
            </div>
        </div>
    )
}

export default Sports;