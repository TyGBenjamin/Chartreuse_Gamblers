import React from "react";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./login";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Sports from "./Sports";
import NFL from "./NFL";
import NBA from "./NBA";
import NHL from "./NHL";
import MLB from "./MLB";

export default function HomeContainer() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="sports" element={<Sports />} />
        <Route path="nfl" element={<NFL />} />
        <Route path="mlb" element={<MLB />} />
        <Route path="nba" element={<NBA />} />
        <Route path="nhl" element={<NHL />} />
      </Routes>
    </>
  );
}
