import React from "react";
import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";

import Home from "./components/Home.jsx";
import Students from "./components/Students.jsx";
import AddStudent from "./components/AddStudents.jsx";
import Counter from "./components/Counter.jsx";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </>
  );
}

export default App;