import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] px-5 sm:px-8 md:px-16 py-20 text-gray-800 dark:text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      {/* Hero Card */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/70 dark:bg-[#1e293b]/70 backdrop-blur-xl border border-white/40 dark:border-gray-800 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-black/30 p-8 sm:p-10 md:p-14">

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

            {/* LEFT CONTENT */}
            <div className="w-full md:w-1/2 text-center md:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white dark:bg-[#0f172a] border border-orange-300 dark:border-orange-500 shadow-sm">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

                <p className="text-sm font-medium">
                  Available for Internship & Freelance
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Bhargav Sinha
                </span>
              </h1>

              {/* Typing */}
              <div className="mt-4">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2500,
                    "MERN Stack Developer",
                    2500,
                    "UI/UX Designer",
                    2500,
                    "Frontend Developer",
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={true}
                  wrapper="p"
                  className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                  style={{ display: "inline-block" }}
                />
              </div>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
                Passionate MERN Stack Developer focused on building scalable,
                responsive, and modern web applications with clean UI and smooth
                user experience.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">

                <a
                  href="/resume.pdf"
                  download
                  className="inline-block px-7 py-3 bg-orange-500 text-white font-semibold rounded-xl shadow-lg hover:bg-orange-600 hover:-translate-y-1 hover:shadow-orange-500/30 transition-all duration-300"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="inline-block px-7 py-3 border-2 border-orange-500 text-orange-500 dark:text-orange-400 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Hire Me
                </a>

              </div>

              {/* Social Icons */}
              <div className="flex justify-center md:justify-start gap-5 mt-8 text-2xl">

                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-md hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-md hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin />
                </a>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-full md:w-1/2 flex justify-center md:-mt-10">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-[2rem] blur-3xl opacity-20"></div>

                {/* Border */}
                <div className="relative p-[5px] rounded-[2rem] bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 shadow-2xl">

                  <div className="w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 rounded-[1.8rem] overflow-hidden bg-white dark:bg-[#1e293b]">

                    <img
                      src={profileImg}
                      alt="Profile"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />

                  </div>
                </div>

                {/* Floating Badge */}
                <div
                  className="
                  absolute
                  bottom-8 md:bottom-10
                  left-1/2
                  -translate-x-1/2
                  bg-white dark:bg-[#0f172a]
                  px-6 py-3
                  rounded-2xl
                  shadow-2xl
                  border border-gray-200 dark:border-gray-800
                  backdrop-blur-xl
                  z-20
                "
                >
                  <p className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
                    MERN Stack Developer 🚀
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;