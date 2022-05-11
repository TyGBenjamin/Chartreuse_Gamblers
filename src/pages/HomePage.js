import React from "react";
// import Login from "./Login";
// import SignUp from './SignUp';
import Button from "react-bootstrap/Button";
import { Nav } from "react-bootstrap";


function App({ handlePageChange }) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Chartreuse Gamblers Sports Book.</h1>
        {/* <div>
          <Button variant="warning" size="lg">
            <Nav.Link onClick={() => handlePageChange('Login')}>Login</Nav.Link>
          </Button>
          <Button variant="warning" size="lg">
            <Nav.Link onClick={() => handlePageChange('SignUp')}>Sign Up</Nav.Link>
          </Button>
        </div> */}
      </header>
    </div>
  );
}


export default App;