import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profileImg from "../assets/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#f8fafc] dark:bg-[#0f172a] px-5 sm:px-8 md:px-16 pt-28 pb-16 text-gray-800 dark:text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="bg-white/70 dark:bg-[#1e293b]/70 backdrop-blur-xl border border-white/40 dark:border-gray-800 rounded-[2.5rem] shadow-[0_20px_80px_rgba(0,0,0,0.08)] dark:shadow-black/30 p-8 sm:p-10 md:p-14">

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

            {/* LEFT SIDE */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-3 mb-7 rounded-full bg-white dark:bg-[#0f172a] border border-orange-400 shadow-md">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>

                <p className="text-sm font-medium">
                  Available for Internship & Freelance
                </p>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Bhargav Sinha
                </span>
              </h1>

              {/* Type Animation */}
              <div className="mt-5">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    2500,
                    "MERN Stack Developer",
                    2500,
                    "Frontend Developer",
                    2500,
                    "UI/UX Designer",
                    2500,
                  ]}
                  repeat={Infinity}
                  cursor={true}
                  wrapper="p"
                  className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
                />
              </div>

              {/* Description */}
              <p className="mt-7 text-lg leading-relaxed text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
                Passionate MERN Stack Developer focused on building scalable,
                responsive, and modern web applications with clean UI and smooth
                user experience.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">

                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="px-8 py-4 border-2 border-orange-500 text-orange-500 dark:text-orange-400 font-semibold rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                >
                  Hire Me
                </a>

              </div>

              {/* Social Icons */}
              <div className="flex justify-center lg:justify-start gap-5 mt-8">

                <a
                  href="https://github.com/Bhargav9334"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-lg hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                </a>

                <a
                  href="https://linkedin.com/in/bhargav-sinha-7274132b1"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-white dark:bg-[#0f172a] flex items-center justify-center shadow-lg hover:text-orange-500 hover:-translate-y-1 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </a>

              </div>

            </div>

            {/* RIGHT SIDE IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center">

              <div className="relative">

                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-[2rem] blur-3xl opacity-30"></div>

                {/* Border */}
                <div className="relative p-[5px] rounded-[2rem] bg-gradient-to-tr from-orange-400 via-pink-500 to-purple-500 shadow-2xl">

                  <div className="w-[280px] sm:w-[340px] md:w-[430px] rounded-[1.8rem] overflow-hidden bg-white dark:bg-[#1e293b]">

                    <img
                      src={profileImg}
                      alt="Bhargav Sinha"
                      className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                    />

                  </div>

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