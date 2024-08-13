import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import Versions from "./Pages/Versions/Versions";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-primary text-white">
        <span className="opacity-4 fixed bottom-0 right-0 m-4 font-mono text-xs text-gray-700">
          <Link to='/v'>v1.6.0</Link>
        </span>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/v" element={<Versions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
