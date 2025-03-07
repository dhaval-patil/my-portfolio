import React from "react";
import {motion, useScroll, useTransform} from 'framer-motion'
import "./about.css";
const About = () => {
    const { scrollYProgress } = useScroll(); // Track scroll progress

  // Scale text from 1 to 3 as you scroll
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 3], [3,5]);
  return (
    <motion.div
      
      
      className="relative w-full h-[85vh] overflow-hidden bg-[#60A5FA] rounded-3xl z-30"
     style={{scale: bgScale}}
    >
      <div className="flex flex-col items-center justify-center gap-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <motion.div
style={{ scale: textScale }}
         className="tracking-tighter text-nowrap flex gap-3 text-2xl lg:text-5xl font-medium text-neutral-50">
          <span>I'm a </span>
          <div className="inline whitespace-pre-wrap tracking-tight text-neutral-50">
            <span>developer.</span>
            <span className="ml-1 opacity-0">_</span>
          </div>
        </motion.div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 blur-3xl">
          <svg
            className="absolute animate-background-gradient"
            width="1550.625"
            height="1550.625"
            viewBox="0 0 100 100"
            style={{
              top: "15.1274%",
              left: "29.3253%",
              animationDuration: "10s",
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#3B82F6"></circle>
          </svg>
          <svg
            className="absolute animate-background-gradient"
            width="1550.625"
            height="516.875"
            viewBox="0 0 100 100"
            style={{
              top: "18.3844%",
              left: "24.5666%",
              animationDuration: "10s",
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#A78BFA"></circle>
          </svg>
          <svg
            className="absolute animate-background-gradient"
            width="1550.625"
            height="1550.625"
            viewBox="0 0 100 100"
            style={{
              top: "14.4388%",
              left: "2.08209%",
              animationDuration: "10s",
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#3B82F6"></circle>
          </svg>
          <svg
            className="absolute animate-background-gradient"
            width="516.875"
            height="1550.625"
            viewBox="0 0 100 100"
            style={{
              top: "19.9693%",
              left: "34.0145%",
              animationDuration: "10s",
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#60A5FA"></circle>
          </svg>
          <svg
            className="absolute animate-background-gradient"
            width="1550.625"
            height="1550.625"
            viewBox="0 0 100 100"
            style={{
              top: "7.83119%",
              left: "12.926%",
              animationDuration: "10s",
            }}
          >
            <circle cx="50" cy="50" r="50" fill="#0F2F65"></circle>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
