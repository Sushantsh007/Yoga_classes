import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="home-bg">
        <h1 className="home-content-header">Welcome to {""} <span className="span">Sush</span> Yoga center</h1>
        <div className="home-content">
          <h1 className="home-content-title">
            Do you want to be part of <span className="span">Our Yoga </span>
            Journey
          </h1>

          <Link to="/Form">
          <button className="enroll-btn">
            Enroll Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
