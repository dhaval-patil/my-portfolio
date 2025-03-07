import React, { useEffect, useState } from "react";
import PROFILE_PIC from "../assets/images/Profile_PIC.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
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
      id="hero"
      {...(!isMobile && { "data-scroll": true, "data-scroll-speed": "-.6" })}
      className="container h-[80vh] mx-auto px-8"
    >
      <div className="flex flex-col lg:flex-row gap-14 item-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-zinc-300">
            👋 Hi, I'm{" "}
            <span className="font-bold text-blue-600">Dhaval Patil, </span>
            <span className="text-lg lg:text-xl font-bold text-zinc-100">
              <Typewriter
                words={[
                  "Full Stack Developer",
                  "MERN Stack Developer",
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
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-to-r from-[#cfd0d6] to-[#717178] bg-clip-text text-transparent">
            Building Scalable & User Centric Web Apps
          </h1>

          <p className="w-full text-zinc-300 lg:w-[500px] text-sm lg:text-base mt-4">
            I’m a passionate Full Stack Web Developer crafting responsive,
            accessible, and dynamic web experiences using React, Node.js, and
            TailwindCSS.
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <a href="#projects">
              <button className="cursor-pointer flex-1 md:flex-none action-btn-outline btn-scale-anim">
                View My Work
              </button>
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=12TD8rKrOjDQS_l2p_9_scwi7JZfHNsxG"
              download
            >
              <button className="cursor-pointer flex-1 md:flex-none action-btn btn-scale-anim">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        <div className="w-[300px] md:w-[370px] h-[300px] md:h-[390px] bg-orange-100/50 rounded-3xl relative order-1 lg:order-2">
          <img
            src={PROFILE_PIC}
            alt="Profile Pic"
            className="rounded-3xl profile-pic"
          />
        </div>
      </div>

      <motion.svg
        className="w-full my-12"
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
