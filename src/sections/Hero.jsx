import { useEffect, useState } from "react";
import PROFILE_PIC from "../assets/images/Profile_PIC.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ABOUT_ME } from "../utils/data";

const Hero = ({ setCursorVariant }) => {
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <section
      {...{ "data-scroll": true, "data-scroll-speed": "-.6" }}
      id="hero"
      className="container mx-auto min-h-[80vh] sm:px-8 flex flex-col items-center justify-between gap-8"
    >
      <div className="flex flex-col lg:flex-row justify-center lg:space-x-10">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex flex-row lg:flex-col gap-4 lg:-space-y-8 justify-center mt-1 lg:mt-30"
        >
          {ABOUT_ME.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className=" group"
            >
              <item.icon className="text-2xl my-4 text-[#f3f3f4] transition-transform duration-400 group-hover:rotate-12 group-hover:scale-180 group-hover:translate-y-[-2px] group-hover:text-[#8987ff] " />
            </a>
          ))}
        </div>

        <img
          src={PROFILE_PIC}
          alt="Profile Pic"
          className="rounded-3xl hover:blur-[2px] hover:duration-300 ease-in-out profile-pic size-65 mx-auto lg:mt-[100px]"
        />

        <div className="lg:mx-9 flex flex-col sm:text-center items-center  gap-14 item-center justify-between lg:mt-[125px]">
          <div className=" text-center mx-2 lg:text-left mt-3 lg:mt-0">
            <h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-text text-zinc-300"
            >
              👋 Hi, I'm{" "}
              <span className="font-text  text-blue-600">Dhaval Patil, </span>
              <span className="text-lg lg:text-3xl font-text  text-zinc-100">
                <Typewriter
                  words={[
                    "Full Stack Developer",
                    "MERN Developer",
                    "Software Developer",
                  ]}
                  loop={Infinity}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h3>

            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="w-full font-text text-zinc-300 lg:w-[500px] text-justify text-base  sm:text-lg lg:text-xl mt-4"
            >
              I’m a passionate Full Stack Web Developer crafting responsive,
              accessible, and dynamic web experiences using React, Node.js, and
              TailwindCSS.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6 sm:w-auto">
              <a
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <button className="font-text text-lg sm:text-xl flex-1 md:flex-none action-btn-outline btn-scale-anim">
                  View My Work
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1QPjAHKuChutPPv9i_BNqgS_bpS4HKcUw/view?usp=sharing"
                target="_blank"
                download
              >
                <button className="font-text text-lg sm:text-xl flex-1 md:flex-none action-btn btn-scale-anim">
                  Download Resume
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <motion.svg
        className="w-full my-25"
        animate={{ y: [0, -20, 0] }} // Move up and down
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="7"></rect>
        <path d="M12 6v4"></path>
      </motion.svg>
    </section>
  );
};

export default Hero;
