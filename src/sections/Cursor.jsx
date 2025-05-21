import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Hero from "./Hero";
import BackToTop from "../components/BackToTop";
import Navbar from "../components/Navbar";
import About from "./About";
import Education from "./Education";
import TechnicalProficiency from "./TechnicalProficiency";
import MyProject from "./MyProject";
import ContactMe from "./ContactMe";
import Footer from "./Footer";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      backgroundColor: "lightblue",
      mixBlendMode: "difference",
    },
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <BackToTop />
      <Navbar setCursorVariant={setCursorVariant} />
      <Hero setCursorVariant={setCursorVariant} />
      <About setCursorVariant={setCursorVariant} />
      <Education setCursorVariant={setCursorVariant} />
      <TechnicalProficiency setCursorVariant={setCursorVariant} />
      <MyProject setCursorVariant={setCursorVariant} />
      <ContactMe setCursorVariant={setCursorVariant} />
      <Footer setCursorVariant={setCursorVariant} />
    </>
  );
};

export default Cursor;
