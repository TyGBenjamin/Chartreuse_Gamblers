import React from "react";
import { Container } from "react-bootstrap";
import { Route } from 'react-router-dom';
import Sports from "./Sports";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {},
    };
  }

  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    //Userame
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    //Password
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }

  contactSubmit(e) {
    e.preventDefault();

    if (this.handleValidation()) {
      alert("Form submitted");
    } else {
      alert("Form has errors.");
    }
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }

  render() {
    return (
      <div>
        <h1 className="login-header">Please Log In</h1>
        <Container className="login">
        <form>
          <fieldset>
            <input
              ref="username"
              type="text"
              size="30"
              placeholder="Username"
              onChange={this.handleChange.bind(this, "username")}
              value={this.state.fields["username"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["username"]}
            </span>
            <br />
            <input
              ref="password"
              type="password"
              size="30"
              placeholder="Password"
              onChange={this.handleChange.bind(this, "password")}
              value={this.state.fields["password"]}
            />
            <span style={{ color: "red" }}>
              {this.state.errors["password"]}
            </span>
            <br />
            {/* <Route exact path="/Sports" render={({ history }) =>(
            <button onClick={() => { history.push('./Sports') }}>Submit</button>)} /> */}
            <button>Submit</button>
          </fieldset>
        </form>
        </Container>
      </div>
    );
  }
}
export default Login;
