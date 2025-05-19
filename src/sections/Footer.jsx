import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="w-full p-4 md:p-8 items-center justify-center h-full overflow-hidden z-30">
      <div
        className="sticky z-30 bottom-0 bg-[#3B82F6] rounded-[36px] left-0 w-full h-80 flex justify-center items-center overflow-hidden"
        style={{ opacity: 1, transform: "none" }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 blur-[100px]">
            <svg
              className="absolute animate-background-gradient"
              style={{
                top: "16.8317%",
                left: "6.60318%",
              }}
              width="1927.5"
              height="642.5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#3B82F6" />
            </svg>

            <svg
              className="absolute animate-background-gradient"
              style={{
                top: "24.3087%",
                left: "26.7131%",
              }}
              width="1927.5"
              height="642.5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#A78BFA" />
            </svg>

            <svg
              className="absolute animate-background-gradient"
              style={{
                top: "6.10641%",
                left: "9.92096%",
              }}
              width="1927.5"
              height="642.5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#3B82F6" />
            </svg>

            <svg
              className="absolute animate-background-gradient"
              style={{
                top: "22.3807%",
                left: "34.746%",
              }}
              width="1927.5"
              height="1927.5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#60A5FA" />
            </svg>

            <svg
              className="absolute animate-background-gradient"
              style={{
                top: "34.2486%",
                left: "3.10797%",
              }}
              width="1927.5"
              height="1927.5"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#3B82F6" />
            </svg>
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
          <div className="flex justify-between w-full sm:text-lg md:text-xl">
            <p className="text-white/60 font-text text-md">
              Last updated: 15-05-2025
            </p>
            <ul className="font-text text-2xl">
              <li className="hover:underline cursor-pointer">
                <a target="_blank" href="https://x.com/dhavalpatil8">
                  X
                </a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a target="_blank" href="https://github.com/dhaval-patil">
                  Github
                </a>
              </li>
              <li className="hover:underline cursor-pointer">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/dhaval-patill/"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <h2 className="absolute font-text1 bottom-0 left-0 translate-y-1/5 sm:text-[192px] text-[128px] text-white font-extrabold tracking-normal">
            DHAVAL
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
