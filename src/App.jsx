// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";

import Contact from "./pages/Contact";

import Course from "./components/Courses";
import From from "./components/From";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/From" element={<From />} />

        <Route path="/home" element={<Home />} />

        <Route path="/courses" element={<Course />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
