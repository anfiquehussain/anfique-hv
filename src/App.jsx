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
      <div className="bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <span className="flex justify-end px-5 py-2 font-mono text-xs text-light">
          v(β v1)
        </span>
      </div>
    </BrowserRouter>
  );
}

export default App;
