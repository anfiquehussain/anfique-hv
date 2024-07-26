// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
