import React from "react";
import "./newHeader.css";
import Code from "./Code";
import SocialMedia from "./SocialMedia";
import Avatar from "../Images/10.png";

const ProfileHeader = () => {
  return (
    <header className="profile__head">
      <div className="container header__container">
        <h5>Hey There</h5>
        <h1>Current User</h1>
        <h5>and I bet on sports!</h5>
        <Code />
        <SocialMedia className="socialButton" />
        <div className="me">
          <img className="avatar" src={Avatar} alt="Current User"></img>
        </div>
        <a href="#contact" className="scroll__down">
          Add FAVORITE TEAM
        </a>
      </div>
    </header>
  );
};

export default ProfileHeader;
