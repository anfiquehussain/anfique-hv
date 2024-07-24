import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function Landing() {
  const [skills] = useState("I am a passionate Software Developer from India. I specialize in both frontend and backend development,with expertise in Django and React. js.I love transforming complex problems into elegant, user - friendly solutions");



  return (
    <div className="flex flex-col items-center h-96 w-full justify-center">
      <h1 className="my-6 text-3xl md:text-6xl font-extrabold drop-shadow-c-drop">ANFIQUE HUSSAIN V</h1>
      <p className="flex space-x-3 md:text-xl text-light">
        <span className="text-center font-extralight indent-8 ms-2 w-72 md:w-35rem">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: false,
              delay:40,
            }}
          />
        </span>
      </p>
    </div>
  );
};

export default Landing;