import React from "react";

import UsersTable from "../../companents/table";
import "./home.scss";
const HomePage = (props) => {
  // console.log(props);
  return (
    <div id="home-page">
      <div className="container">
        <div className="home-page">HomePage</div>
        <br />
        <hr />
        <h3 style={{ textAlign: "center" }}>USERS TABLE</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <UsersTable users={props.users} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;