import React, { useEffect, useState } from "react";
import PROFILE_PIC from "../assets/images/Profile_PIC.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { ABOUT_ME } from "../utils/data";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      {...(!isMobile && { "data-scroll": true, "data-scroll-speed": "-.6" })}
      id="hero"
      className="container mx-auto min-h-[80vh] flex flex-col sm:flex-col items-center justify-between gap-8"
    >
      <div className="flex justify-center space-x-15">
        <div className="mt-30  left-10 ">
          {ABOUT_ME.socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer group"
            >
              <item.icon className="text-2xl my-4 text-[#f3f3f4] transition-transform duration-400 group-hover:rotate-12 group-hover:scale-180 group-hover:translate-y-[-2px] group-hover:text-[#8987ff] " />
            </a>
          ))}
        </div>
        <img
          src={PROFILE_PIC}
          alt="Profile Pic"
          className="rounded-3xl hover:blur-[2px] hover:duration-300 ease-in-out profile-pic size-65 mt-[100px] "
        />

        <div className="flex flex-col lg:flex-row gap-14 item-center justify-between mt-[125px]">
          <div className=" text-center lg:text-left mt-16 lg:mt-0">
            <h3 className="text-xl lg:text-3xl font-text text-zinc-300">
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

            <p className="w-full font-text text-zinc-300 lg:w-[500px] text-justify text-xl lg:text-xl mt-4">
              I’m a passionate Full Stack Web Developer crafting responsive,
              accessible, and dynamic web experiences using React, Node.js, and
              TailwindCSS.
            </p>

            <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
              <a
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                <button className="font-text text-xl cursor-pointer flex-1 md:flex-none action-btn-outline btn-scale-anim">
                  View My Work
                </button>
              </a>
              <a
                href="https://drive.google.com/file/d/1QPjAHKuChutPPv9i_BNqgS_bpS4HKcUw/view?usp=sharing"
                target="_blank"
                download
              >
                <button className="font-text text-xl cursor-pointer flex-1 md:flex-none action-btn btn-scale-anim">
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
