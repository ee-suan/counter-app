import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  // object destructuring
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Cart{" "}
          <span className="badge rounded-pill bg-secondary m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
