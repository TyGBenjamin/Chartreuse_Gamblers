import React from "react";
// import { BrowserRouter as Router, Switch, 
  // Route, Redirect,} from "react-router-dom";
import Sports from "./Sports";

class SignUp extends React.Component {
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

    //First Name
    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = "Cannot be empty";
    }

    if (typeof fields["name"] !== "undefined") {
      if (
        !fields["name"].match(
          /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
        )
      ) {
        formIsValid = false;
        errors["name"] = "Only letters";
      }
    }

    //Last Name
    if (!fields["lastName"]) {
      formIsValid = false;
      errors["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (
        !fields["lastName"].match(
          /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
        )
      ) {
        formIsValid = false;
        errors["lastName"] = "Only letters";
      }
    }

    //Username
    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "Cannot be empty";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z0-9._]+$/)) {
        formIsValid = false;
        errors["username"] = "Alphanumeric characters only";
      }
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^.{8,20}$/)) {
        formIsValid = false;
        errors["username"] = "Must be between 8 and 20 characters";
      }
    }

    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        )
      ) {
        formIsValid = false;
        errors["password"] =
          "Password must contain one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 20 characters in length.";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof fields["email"] !== "undefined") {
      let lastAtPos = fields["email"].lastIndexOf("@");
      let lastDotPos = fields["email"].lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          fields["email"].indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          fields["email"].length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email is not valid";
      }
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
    const styles = {
      backgroundColor: "chartreuse",
    };
    return (
      <div style={styles}>
        <div>
          <h1 className="signup-header">Please sign up to place bets.</h1>
        </div>
        <form
          name="contactform"
          className="contactform"
          onSubmit={this.contactSubmit.bind(this)}
        >
          <div className="col-md-6">
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
              <input
                ref="name"
                type="text"
                size="30"
                placeholder="First Name"
                onChange={this.handleChange.bind(this, "name")}
                value={this.state.fields["name"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
              <br />
              <input
                ref="lastName"
                type="text"
                size="30"
                placeholder="Last Name"
                onChange={this.handleChange.bind(this, "lastName")}
                value={this.state.fields["lastName"]}
              />
              <span style={{ color: "red" }}>
                {this.state.errors["lastName"]}
              </span>
              <br />
              <input
                refs="email"
                type="text"
                size="30"
                placeholder="Email"
                onChange={this.handleChange.bind(this, "email")}
                value={this.state.fields["email"]}
              />
              <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
              <br />
              <button>Submit</button>
            </fieldset>
          </div>
        </form>
      </div>
    );
  }
}

// React.render(<SignUp />, document.getElementById("container"));
export default SignUp;
