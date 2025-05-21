import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import TechnicalProficiency from "./sections/TechnicalProficiency";
import AboutMe from "./sections/AboutMe";
import MyProject from "./sections/MyProject";
import ContactMe from "./sections/ContactMe";
import Footer from "./sections/Footer";
import Education from "./sections/Education";
import BackToTop from "./components/BackToTop";
import CodingProfiles from "./sections/CodingProfiles";
import LocomotiveScroll from "locomotive-scroll";

import About from "./sections/About";
import Cursor from "./sections/Cursor";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Cursor />

      {/* <CodingProfiles/> */}
    </div>
  );
};

export default App;
