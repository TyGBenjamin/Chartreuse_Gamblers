import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Sports from "./Sports";

// import "../new.css";

import styled from "styled-components";
import Button from "../components/Button";
import Icon from "../components/Icon";
import Input from "../components/Input";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

function Login(props) {
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleValidation = () => {
    const errorsToSet = {};
    let formIsValid = true;

    //Userame
    if (!fields["userName"]) {
      formIsValid = false;
      errorsToSet["userName"] = "Cannot be empty";
    }

    //Password
    if (!fields["password"]) {
      formIsValid = false;
      errorsToSet["password"] = "Cannot be empty";
    }

    setErrors(errorsToSet);
    return formIsValid;
  };

  const contactSubmit = (e) => {
    e.preventDefault();

    if (handleValidation()) {
      alert("Form submitted");
      fetch("http://localhost:3001/api/users/login", {
        method: "POST",
        body: JSON.stringify(fields),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.token) {
            // User Logged In Successfully
            sessionStorage.setItem("TOKEN", res.token);
            // TODO:  Navigate the user to the sports page.
            window.location.href = "sports";
          }
        });
    } else {
      alert("Form has errors.");
    }
  };

  const handleChange = (field, e) => {
    const fieldsToSet = {
      ...fields,
      [field]: e.target.value,
    };
    setFields(fieldsToSet);
  };

  const FacebookBackground =
    "linear-gradient(to right, #0546A0 0%, #0546A0 40%, #663FB6 100%)";
  const GoogleBackground =
    "linear-gradient(to right, #fff 0%, #fff 10%, #990 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";

  return (
    <div className="loginDiv">
      <div className="loginBox">
        <MainContainer>
          <WelcomeText>Welcome</WelcomeText>
          <InputContainer>
            <input
              className="inputBox"
              value={fields.username}
              onChange={(e) => handleChange("userName", e)}
              type="text"
              placeholder="Username"
            />
            <span style={{ color: "red" }}>{errors["userName"]}</span>
            <br />
            <input
              className="inputBox"
              value={fields.password}
              onChange={(e) => handleChange("password", e)}
              type="password"
              placeholder="Password"
            />
            <span style={{ color: "red" }}>{errors["password"]}</span>
            <br />
          </InputContainer>
          <ButtonContainer>
            <button
              className="signUpButton"
              type="button"
              onClick={(e) => contactSubmit(e)}
            >
              Enter
            </button>
          </ButtonContainer>
          <LoginWith>OR LOGIN WITH</LoginWith>
          <HorizontalRule />
          <IconsContainer>
            <Icon color={FacebookBackground}>
              <FaFacebookF
                onClick={() => (window.location = "https://www.facebook.com/")}
                href="https://www.facebook.com/"
              />
            </Icon>
            <Icon color={GoogleBackground} href="">
              <FaGoogle
                onClick={() => (window.location = "https://www.google.com/")}
              />
            </Icon>
            <Icon href="https://www.twitter.com/" color={TwitterBackground}>
              <FaTwitter
                onClick={() => (window.location = "https://www.twitter.com/")}
              />
            </Icon>
          </IconsContainer>
          <ForgotPassword>Forgot Password ?</ForgotPassword>
        </MainContainer>
      </div>
    </div>
  );
}

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8.5px);
  -webkit-backdrop-filter: blur(8.5px);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (max-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 50vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

const WelcomeText = styled.h2`
  margin: 3rem 0 2rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  width: 100%;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginWith = styled.h5`
  cursor: pointer;
`;

const HorizontalRule = styled.hr`
  width: 90%;
  height: 0.3rem;
  border-radius: 0.8rem;
  border: none;
  background: linear-gradient(to right, #14163c 0%, #03217b 79%);
  background-color: #ebd0d0;
  margin: 1.5rem 0 1rem 0;
  backdrop-filter: blur(25px);
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 2rem 0 3rem 0;
  width: 80%;
`;

const ForgotPassword = styled.h4`
  cursor: pointer;
`;

export default Login;
