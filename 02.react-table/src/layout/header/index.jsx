import React from "react";
import "./header.scss";
import PrimaryButton from "../../companents/button";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h2>This is Header </h2>
          <PrimaryButton btnTextContent={"Header Btn"} />
        </div>
      </div>
    </header>
  );
};

export default Header;