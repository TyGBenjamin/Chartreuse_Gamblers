import React, { useState } from "react";
import Header from "./Header";
import HomePage from "./HomePage";
import Login from "./login";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Sports from "./Sports";

export default function HomeContainer() {
  const [currentPage, setCurrentPage] = useState("HomePage");

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
      return <Sports />;
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
