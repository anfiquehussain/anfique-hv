import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import {
  AiOutlinePython,
  AiOutlineHtml5,
  AiOutlineJavaScript,
  AiFillGithub,
} from "react-icons/ai";
import { FaCss3Alt, FaGitAlt, FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import {
  SiDjango,
  SiJquery,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Link } from "react-router-dom";
import SkillIcon from "../../components/SkillIcon/SkillIcon";

function About() {
  const [skills, setskills] = useState(
    "Welcome! Here, you can learn more about me, what I do, and my skills in programming and technology.",
  );

  return (
    <div className="my-5 flex w-full flex-col items-center justify-start">
      <header className="text-center">
        <p className="text-2xl font-light text-light">I AM</p>
        <h1 className="my-2 text-3xl font-extrabold drop-shadow-c-drop md:my-6 md:text-6xl">
          ANFIQUE HUSSAIN V
        </h1>
        <p className="mx-5 text-center text-lg font-light text-light">
          <Typewriter
            options={{
              strings: skills,
              autoStart: true,
              loop: false,
              delay: 40,
            }}
          />
        </p>
      </header>
      <br />

      <section className="grid p-4 md:mt-44 md:grid-cols-2">
        <h1 className="mb-5 block text-center text-8xl text-white md:hidden md:text-start">
          ABOUT
        </h1>
        <img
          src="/images/dp_demo.png"
          alt="Profile picture"
          className="h-96 w-96 justify-self-center rounded-lg border object-cover"
        />
        <article className="mx-5 mt-5 self-end justify-self-start text-justify text-lg font-light text-light md:me-10 md:mt-0 md:self-start">
          <h1 className="hidden text-center text-8xl text-white md:block md:text-start">
            ABOUT
          </h1>
          I am Anfique Hussain, a dedicated Software Developer with a diploma in
          Computer Engineering from Government Polytechnic College Mananthavady.
          My journey in the tech world has equipped me with versatile skills in
          both frontend and backend development. I specialize in Django and
          React.js and have a proven track record of creating user-friendly
          applications. Outside of coding, I enjoy graphic design, which I often
          incorporate into my projects. I am passionate about continuously
          improving my skills and contributing meaningfully to the tech
          industry.
          <br />
          <br />
          <span className="font-semibold text-light">
            - to contact me{" "}
            <Link
              to="/contact"
              className="rounded-lg bg-secondary px-2 py-1 hover:bg-backgroundHover hover:text-white"
            >
              CONTACT
            </Link>
          </span>
        </article>
      </section>

      <section className="container mt-20">
        <h1 className="text-center text-5xl">MY SKILLS</h1>
        <div className="m-5 grid grid-cols-2 gap-4 text-4xl uppercase text-light sm:grid-cols-3 md:mt-5 md:grid-cols-4 md:text-3xl lg:grid-cols-6">
          {/* Frontend */}
          <SkillIcon Icon={AiOutlineHtml5} name="HTML" />
          <SkillIcon Icon={FaCss3Alt} name="CSS" />
          <SkillIcon Icon={AiOutlineJavaScript} name="JavaScript" />
          <SkillIcon Icon={FaReact} name="React.js" />
          <SkillIcon Icon={SiTailwindcss} name="Tailwind" />
          <SkillIcon Icon={SiJquery} name="jQuery" />

          {/* Backend */}
          <SkillIcon Icon={AiOutlinePython} name="Python" />
          <SkillIcon Icon={SiDjango} name="Django" />
          <SkillIcon Icon={TbApi} name="REST API" />

          {/* Databases */}
          <SkillIcon Icon={SiPostgresql} name="PostgreSQL" />
          <SkillIcon Icon={SiMysql} name="MySQL" />

          {/* Tools and Others */}
          <SkillIcon Icon={FaGitAlt} name="Git" />
          <SkillIcon Icon={AiFillGithub} name="GitHub" />
          <SkillIcon Icon={MdDesignServices} name="UI/UX" />
        </div>
      </section>
    </div>
  );
}

export default About;
