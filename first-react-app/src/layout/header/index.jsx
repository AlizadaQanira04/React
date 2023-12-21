import React from "react";
import { IoAirplaneOutline } from "react-icons/io5";
import "./header.scss";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h3 className="logo">
            <IoAirplaneOutline />
            Electrochip
          </h3>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Service</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
