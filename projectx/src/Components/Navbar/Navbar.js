import React from "react";
import logo from "./../../logo.svg";
import "./Navbar.scss"; 
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="navbar-logo" alt="logo"/>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            Groceries
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            New Items
          </a>
        </li>
      </ul>
    </nav>
  );
}
