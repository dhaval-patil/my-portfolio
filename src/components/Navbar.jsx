import React, { useEffect, useState } from "react";
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-scroll";
import "../taiwind.css";
import { FaHamburger } from "react-icons/fa";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="container mx-auto sticky top-5 z-[999]">
        <div className="flex item-center justify-between rounded-full   backdrop-blur-[10px] m-5 p-3 md:p-0">
          {/* Logo  */}
          <img
            className="h-7 ml-6 my-2 -mb-1 filter invert brightness-60"
            src={LOGO}
            alt="Logo"
          />

          {/* {Hamburger icon {visible only on small screen}} */}
          <button
            className="block md:hidden text-[#333] mr-6 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Navigation Links */}
          <ul
            className={`${
              isOpen ? "flex" : "hidden"
            } menu-wrapper text-[20px] tracking-tighter text-zinc-300 font-bold`}
          >
            {MENU_LINKS.map((item) => (
              <li key={item.id}>
                <Link
                  activeClass="active"
                  to={item.to}
                  smooth
                  offset={item.offset}
                  className="menu-item"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* hire me button */}
          {/* <button className="hidden md:block h-12 bg-gradient-to-r from-[#f4a44f] to-[#ac573f] text-[15px] font-medium text-white rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
            Hire Me
          </button> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
