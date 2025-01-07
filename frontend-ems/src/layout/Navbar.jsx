// import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Employee Management System
        </a>

        <Link type="button" className="btn  btn-outline-light mx-5" to="/addemployee">
          Add Employee
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
