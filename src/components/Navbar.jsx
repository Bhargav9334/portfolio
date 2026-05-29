import React, { useState, useEffect } from "react";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

const Navbar = () => {
  const [theme, setTheme] = useState("dark");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.classList.remove(
      "light",
      "dark"
    );
    document.documentElement.classList.add(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      "light",
      "dark"
    );
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "dark" ? "light" : "dark"
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 dark:bg-[#020617]/80 backdrop-blur-2xl shadow-xl border-b border-gray-200 dark:border-slate-800"
          : "bg-white/40 dark:bg-[#020617]/40 backdrop-blur-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto h-[70px] px-4 sm:px-6 md:px-8 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">
          <h1
            className="
            text-[28px]
            sm:text-[34px]
            md:text-[46px]
            bg-gradient-to-r
            from-orange-400
            via-pink-500
            to-purple-500
            bg-clip-text
            text-transparent
            hover:scale-105
            transition-all
            duration-500
            "
            style={{
              fontFamily: "Allura, cursive",
              lineHeight: "1.5",
              paddingBottom: "10px",
            }}
          >
            Bhargav Sinha
          </h1>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          <a
            href="#home"
            className="font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#projects"
            className="font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="font-semibold text-gray-700 dark:text-gray-300 hover:text-orange-500"
          >
            Contact
          </a>

          {/* More Dropdown */}
          <div className="relative group">

            <button
              className="
              flex items-center gap-2
              font-semibold
              text-gray-700
              dark:text-gray-300
              hover:text-orange-500
              "
            >
              More
              <FaChevronDown size={12} />
            </button>

            <div
              className="
              absolute
              right-0
              top-12
              w-60
              rounded-2xl
              bg-white
              dark:bg-[#0f172a]
              border
              border-gray-200
              dark:border-slate-700
              shadow-2xl
              opacity-0
              invisible
              translate-y-2
              group-hover:opacity-100
              group-hover:visible
              group-hover:translate-y-0
              transition-all
              duration-300
              overflow-hidden
              "
            >
              <a
                href="#about"
                className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                About
              </a>

              <a
                href="#experience"
                className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Experience
              </a>

              <a
                href="#techstack"
                className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Tech Stack
              </a>

              <a
                href="#achievements"
                className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Achievements
              </a>

              <a
                href="#whyhireme"
                className="block px-5 py-3 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                Why Hire Me
              </a>
            </div>
          </div>

          {/* Theme */}
          <button
            onClick={toggleTheme}
            className="
            w-11 h-11
            rounded-full
            bg-gradient-to-r
            from-orange-400
            via-pink-500
            to-purple-500
            p-[2px]
            hover:rotate-180
            transition-all
            duration-700
            "
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-[#020617] flex items-center justify-center">

              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-500" />
              )}

            </div>
          </button>

        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-3">

          <button
            onClick={toggleTheme}
            className="
            w-10 h-10
            rounded-full
            bg-gradient-to-r
            from-orange-400
            via-pink-500
            to-purple-500
            p-[2px]
            "
          >
            <div className="w-full h-full rounded-full bg-white dark:bg-[#020617] flex items-center justify-center">

              {theme === "dark" ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-indigo-500" />
              )}

            </div>
          </button>

          <button
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="text-2xl text-gray-700 dark:text-white"
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`
        lg:hidden
        overflow-hidden
        transition-all
        duration-500
        ${
          menuOpen
            ? "max-h-[600px]"
            : "max-h-0"
        }
        `}
      >
        <div className="bg-white dark:bg-[#020617]">

          {[
            "home",
            "about",
            "experience",
            "projects",
            "techstack",
            "achievements",
            "whyhireme",
            "contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() =>
                setMenuOpen(false)
              }
              className="
              block
              px-6
              py-4
              capitalize
              font-medium
              text-center
              hover:bg-gray-100
              dark:hover:bg-slate-900
              "
            >
              {item}
            </a>
          ))}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;