import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
    <nav className="navbar">
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/students" className="nav-link">
        Students
      </NavLink>
      <NavLink to="/add" className="nav-link">
        Add Student
      </NavLink>
      <NavLink to="/counter" className="nav-link">
        Counter
      </NavLink>
      <NavLink to="/todo" className="nav-link">
        Todo List
      </NavLink>
       <NavLink to="/calender" className="nav-link">
        Calendar
      </NavLink>
    </nav>
    </>
  );
}

export default Navbar;