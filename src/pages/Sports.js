import React from 'react';
// // import { Container, NavDropdown, Nav } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import MLB from "./MLB";
// import NBA from "./NBA";
// import NFL from "./NFL";
// import NHL from "./NHL";

// const client = new ApolloClient({
//     uri: '/graphql',
//     cache: new InMemoryCache(),
//   });
  

// function Sports({ handlePageChange }) {
//     return (
//         <div>
//             <ApolloProvider client={client}>
//                 <Router>
//                     <div>
//                         <Routes>
//                             <Button className="btn6" variant="warning" size="lg">
//                                 <Route
//                                     path="/"
//                                     element={<MLB />}
//                                 />
//                             </Button>
//                         </Routes>
//                         <Routes>
//                             <Button className="btn6" variant="warning" size="lg">
//                                 <Route
//                                     path="/"
//                                     element={<NBA />}
//                                 />
//                             </Button>
//                         </Routes>
//                         <Routes>
//                             <Button className="btn6" variant="warning" size="lg">
//                                 <Route
//                                     path="/"
//                                     element={<NFL />}
//                                 />
//                             </Button>
//                         </Routes>
//                         <Routes>
//                             <Button className="btn6" variant="warning" size="lg">
//                                 <Route
//                                     path="/"
//                                     element={<NHL />}
//                                 />
//                             </Button>
//                         </Routes>
//                     </div>
//                 </Router>
//             </ApolloProvider>
//             {/* <Container>
//                 <div className="buttons">
//                     <Button className="btn6" variant="warning" size="lg">
//                         <Nav.Link onClick={() => handlePageChange('MLB')}>MLB</Nav.Link>
//                     </Button>
//                     <Button className="btn7" variant="warning" size="lg">
//                         <Nav.Link onClick={() => handlePageChange('NBA')}>NBA</Nav.Link>
//                     </Button>
//                     <Button className="btn8" variant="warning" size="lg">
//                         <Nav.Link onClick={() => handlePageChange('NFL')}>NFL</Nav.Link>
//                     </Button>
//                     <Button className="btn9" variant="warning" size="lg">
//                         <Nav.Link onClick={() => handlePageChange('NHL')}>NHL</Nav.Link>
//                     </Button>
//                 </div>
//             </Container> */}
//         </div>
//     )
// }

function Sports() {
    return (
        <div>
            <h1>"Sports Page"</h1>
        </div>
    );
}


export default Sports;