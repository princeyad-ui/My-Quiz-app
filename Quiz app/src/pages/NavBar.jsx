import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="body">
      <div className="navbar">
        
        <img src="/quiz-logo.jpg" alt="Quiz logo" />

        <ul>
          <li>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/quiz" style={{ color: "white", textDecoration: "none" }}>
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/result"
              style={{ color: "white", textDecoration: "none" }}
            >
              Result
            </Link>
          </li>
          <li>
            <Link
              to="/questioncard"
              style={{ color: "white", textDecoration: "none" }}
            >
              QuestionCard
            </Link>
          </li>
          <li>
            <Link
              to="/reviewcard"
              style={{ color: "white", textDecoration: "none" }}
            >
              ReviewCard
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
