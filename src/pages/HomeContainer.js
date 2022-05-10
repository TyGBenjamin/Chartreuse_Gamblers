import React, { useState } from "react";
import Header from "./Header";
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
  const [currentPage, setCurrentPage] = useState("HomePage");
  // const handlePageChange = (page) => setCurrentPage(page);
  const renderPage = () => {
    if (currentPage === "HomePage") {
      return <HomePage />;
    }
    if (currentPage === "Login") {
      return <Login />;
    }
    if (currentPage === "SignUp") {
      return <SignUp />;
    }
    if (currentPage === "Profile") {
      return <Profile />;
    }
    if (currentPage === "Sports") {
      return <Sports handlePageChange={handlePageChange}/>;
    }
    if (currentPage === "NFL") {
      return <NFL />;
    }
    if (currentPage === "MLB") {
      return <MLB />;
    }
    if (currentPage === "NBA") {
      return <NBA />;
    }
    if (currentPage === "NHL") {
      return <NHL />;
    }

  };

  const handlePageChange = (page) => setCurrentPage(page);



  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
