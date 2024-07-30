import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-primary text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <span className="opacity-4 absolute bottom-0 right-0 m-4 font-mono text-xs text-gray-700">
          v(β v1)
        </span>
      </div>
    </BrowserRouter>
  );
}

export default App;
