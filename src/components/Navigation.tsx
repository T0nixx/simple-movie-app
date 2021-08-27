import React from "react";
import { Link } from "react-router-dom";
import "./Navgation.css";

function Navigation(): JSX.Element {
  return (
    <div className="navigation">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navigation;
