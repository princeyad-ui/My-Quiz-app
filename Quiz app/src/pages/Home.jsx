import React from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div className="container">
        <img src="./public/Quiz logo.jpg" alt="img-logo" style={{backgroundcolor:"white"}} />
        <p onClick={() => navigate("/Quiz")}> Start Quiz</p>
      </div>
    </div>
  );
};

export default Home;
