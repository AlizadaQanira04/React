import React from "react";
import "./footer.scss";
import PrimaryButton from "../../companents/button";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <h2>This is Footer</h2>
          <PrimaryButton btnTextContent={"Footer Btn"} bg={"orange"} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;