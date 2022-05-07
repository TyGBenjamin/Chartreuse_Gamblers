import React from 'react';
import { Container, NavDropdown, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MLB from "./MLB";
import NBA from "./NBA";
import NFL from "./NFL";
import NHL from "./NHL";



function Sports({ handlePageChange }) {
    return (
        <div>
            <Container className="sportsPage">
                <div className="container-fluid flex-row w-75 justify-content-center text-center">
                    <div className="buttons">
                        <div className="row p-2">
                            <div className="col-12 col-sm-6 col-md-4">

                                <Button className="btn6" variant="warning" size="lg">
                                    <Nav.Link onClick={() => handlePageChange('MLB')}>MLB</Nav.Link>
                                </Button>
                                <Button className="btn7" variant="warning" size="lg">
                                    <Nav.Link onClick={() => handlePageChange('NBA')}>NBA</Nav.Link>
                                </Button>
                            </div>
                        </div>
                        <br />
                        <div className="row p-2">
                            <div className="col-12 col-sm-6 col-md-4">
                                <Button className="btn8" variant="warning" size="lg">
                                    <Nav.Link onClick={() => handlePageChange('NFL')}>NFL</Nav.Link>
                                </Button>
                                <Button className="btn9" variant="warning" size="lg">
                                    <Nav.Link onClick={() => handlePageChange('NHL')}>NHL</Nav.Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

// function Sports() {
//     return (
//         <div>
//             <h1>"Sports Page"</h1>
//         </div>
//     );
// }


export default Sports;