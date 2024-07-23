import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function Landing() {
  const [skills] = useState([
    "Software Engineer",
    "Front end",
    "UI/UX",
    "Back end",
  ]);



  return (
    <div className="flex flex-col items-center h-96 w-full justify-center">
      <h1 className="my-4 text-3xl md:text-6xl font-extrabold drop-shadow-c-drop">ANFIQUE HUSSAIN V</h1>
      <p className="flex space-x-3 md:text-xl text-light">
        I am
        <span className="font-extrabold ms-2">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </span>
      </p>
    </div>
  );
};

export default Landing;