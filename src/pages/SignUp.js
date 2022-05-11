import React, { useState } from "react";
// import { BrowserRouter as Router, Switch,
import { useNavigate } from 'react-router-dom';
import Sports from "./Sports";

function SignUp(props) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    const errorsToSet = {};
    let formIsValid = true;

    //First Name
    if (!fields["firstName"]) {
      formIsValid = false;
      errorsToSet["firstName"] = "Cannot be empty";
    }

    if (typeof fields["firstName"] !== "undefined") {
      if (
        !fields["firstName"].match(
          /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
        )
      ) {
        formIsValid = false;
        errorsToSet["firstName"] = "Only letters";
      }
    }

    //Last Name
    if (!fields["lastName"]) {
      formIsValid = false;
      errorsToSet["lastName"] = "Cannot be empty";
    }

    if (typeof fields["lastName"] !== "undefined") {
      if (
        !fields["lastName"].match(
          /^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ]+$/
        )
      ) {
        formIsValid = false;
        errorsToSet["lastName"] = "Only letters";
      }
    }

    //UserName
    if (!fields["userName"]) {
      formIsValid = false;
      errorsToSet["userName"] = "Cannot be empty";
    }

    if (typeof fields["userName"] !== "undefined") {
      if (!fields["userName"].match(/^[a-zA-Z0-9._]+$/)) {
        formIsValid = false;
        errorsToSet["userName"] = "Alphanumeric characters only";
      }
    }

    if (typeof fields["userName"] !== "undefined") {
      if (!fields["userName"].match(/^.{8,20}$/)) {
        formIsValid = false;
        errorsToSet["userName"] = "Must be between 8 and 20 characters";
      }
    }

    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errorsToSet["password"] = "Cannot be empty";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        )
      ) {
        formIsValid = false;
        errorsToSet["password"] =
          "Password must contain one uppercase letter, one lowercase letter, one number, one special character, and be between 8 and 20 characters in length.";
      }
    }

    //Email
    if (!fields["email"]) {
      formIsValid = false;
      errorsToSet["email"] = "Cannot be empty";
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
        errorsToSet["email"] = "Email is not valid";
      }
    }

    setErrors(errorsToSet);
    return formIsValid;
  }

  const contactSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      alert("Form submitted");
      fetch('http://localhost:3001/api/users/register', {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
        .then(res => {
          if (res.token) {
            // User Logged In Successfully
            sessionStorage.setItem('TOKEN', res.token);
            // TODO:  Navigate the user to the sports page.
            navigate('/sports');
          }
        })

    } else {
      alert("Form has errors.");
    }
  }

  const handleChange = (field, e) => {
    const fieldsToSet = {
      ...fields,
      [field]: e.target.value
    };
    setFields(fieldsToSet);
  }

  return (
    <div style={{
      backgroundColor: "chartreuse",
    }}>
      <div>
        <h1 className="signup-header">Please sign up to place bets.</h1>
      </div>
      <form
        name="contactform"
        className="contactform"
        onSubmit={contactSubmit.bind(this)}
      >
        <div className="col-md-6">
          <fieldset>
            <input
              type="text"
              size="30"
              placeholder="Username"
              onChange={handleChange.bind(this, "userName")}
              value={fields["userName"]}
            />
            <span style={{ color: "red" }}>
              {errors["userName"]}
            </span>
            <br />
            <input
              type="password"
              size="30"
              placeholder="Password"
              onChange={handleChange.bind(this, "password")}
              value={fields["password"]}
            />
            <span style={{ color: "red" }}>
              {errors["password"]}
            </span>
            <br />
            <input
              type="text"
              size="30"
              placeholder="First Name"
              onChange={handleChange.bind(this, "firstName")}
              value={fields["firstName"]}
            />
            <span style={{ color: "red" }}>{errors["firstName"]}</span>
            <br />
            <input
              type="text"
              size="30"
              placeholder="Last Name"
              onChange={handleChange.bind(this, "lastName")}
              value={fields["lastName"]}
            />
            <span style={{ color: "red" }}>
              {errors["lastName"]}
            </span>
            <br />
            <input
              refs="email"
              type="text"
              size="30"
              placeholder="Email"
              onChange={handleChange.bind(this, "email")}
              value={fields["email"]}
            />
            <span style={{ color: "red" }}>{errors["email"]}</span>
            <br />
            <button>Submit</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
}

// React.render(<SignUp />, document.getElementById("container"));

export default SignUp;
