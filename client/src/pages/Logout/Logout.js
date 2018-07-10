import React from "react";
import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import "./Logout.css";

const Logout = () => (
  <div>
     <Navbar />
      <Header />
    <div className="AtTitle">Logout Page
    </div>
    <br />
    <p className="LogoutText">
      You have successfully logged out!
    </p>
  </div>
);

export default Logout;