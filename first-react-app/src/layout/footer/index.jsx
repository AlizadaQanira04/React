import React from "react";
import "./footer.scss"
import { CiLocationOn } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { SlEnvolopeLetter } from "react-icons/sl";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function Header() {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="top">
            <nav>
              <ul>
                <li><a href="#"><CiLocationOn />Passages of lorem ipsum available</a></li>
                <li><a href="#"><FaPhone />call:+012334455678595878</a></li>
                <li><a href="#"><SlEnvolopeLetter /> demo@gmail.com</a></li>
              </ul>
            </nav>
          </div>
          <div className="bottom">
            <form action="">
              <input className="input1" type="text" placeholder="Enter you email"/>
              <input className="input2" type="submit"></input>
            </form>
            <div className="icons">
              <div className="icon"><FaFacebookF /></div>
              <div className="icon">  <FaInstagram /></div>
              <div className="icon"> <FaLinkedinIn /></div>
            
            </div>
          </div>
        </div>
      </div>
       
    </footer>
  );
}

export default Header;
