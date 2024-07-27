import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { IoMdDownload } from "react-icons/io";

function Landing() {
  const [skills] = useState(
    "I am a passionate Software Developer from India. I specialize in both frontend and backend development,with expertise in Django and React. js.I love transforming complex problems into elegant, user - friendly solutions",
  );
  return (
    <div className="flex h-35rem w-full flex-col items-center justify-center">
      <h1 className="my-6 text-3xl font-extrabold drop-shadow-c-drop md:text-6xl">
        ANFIQUE HUSSAIN V
      </h1>
      <p className="flex space-x-3 text-light md:text-xl">
        <span className="ms-2 w-72 text-center font-extralight md:w-35rem">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />
        </span>
      </p>
      <br />
      <div className="grid grid-cols-1 gap-4">
        {/* <button class="bg-gray-300 hover:bg-gray-400 text-primary  font-bold py-2 px-4 rounded inline-flex items-center">
          <span>CONTACT</span>
        </button> */}
        <a href="Resume/resume.pdf" download="Anfique_Hussain_Resume.pdf">
          <button class="inline-flex items-center rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
            <IoMdDownload />
            <span className="ms-2">RESUME</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default Landing;
