import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Contact from "./Pages/Contact/Contact";
import Versions from "./Pages/Versions/Versions";
import AnimatedCursor from "react-animated-cursor";
import BlogsContent from "./Pages/Blogs/BlogsContent";
import BlogsHome from "./Pages/Blogs/BlogsHome";

function App() {
  return (
    <BrowserRouter>
      <AnimatedCursor
        innerSize={10}
        outerSize={30}
        color="139, 148, 158"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "255, 255, 255",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />
      <div className="bg-primary text-white">
        <span className="opacity-4 fixed bottom-0 right-0 m-4 font-mono text-xs text-gray-700">
          <Link to="/v">v2.6.0</Link>
        </span>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<BlogsHome />} />
          <Route path="/blogs-content" element={<BlogsContent />} />
          <Route path="/v" element={<Versions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
