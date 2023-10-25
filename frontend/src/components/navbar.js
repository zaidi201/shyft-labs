import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <ul
            className="navbar"
            style={{
              display: "flex",
              gap: "15px",
              listStyle: "none",
              padding: "10",
            }}
          >
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/register"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add New Student
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/studentList"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Student List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/addCourse"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add New Course
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/courseList"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Courses List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/addResult"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Add New Results
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/resultList"
                className="nav-link"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Results List
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
