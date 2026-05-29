
import React from "react";

import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#f8fafc] dark:bg-[#111827] text-gray-800 dark:text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl sm:text-5xl font-bold">

          About{" "}

          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">

          Full-Stack MERN Developer with hands-on experience in developing
          scalable web applications using React.js, Node.js, Express.js, and
          MongoDB. Skilled in frontend development, REST API integration, JWT
          authentication, responsive UI design, and database management.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

        {/* Card 1 */}
        <div className="group bg-white dark:bg-[#1e293b] rounded-3xl p-7 shadow-lg border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 dark:bg-orange-500/10 flex items-center justify-center mb-5">

            <FaCode className="text-3xl text-orange-500" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Frontend Development
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Building responsive and modern user interfaces using React.js,
            Tailwind CSS, HTML5, CSS3, and JavaScript with clean UI/UX design.
          </p>
        </div>

        {/* Card 2 */}
        <div className="group bg-white dark:bg-[#1e293b] rounded-3xl p-7 shadow-lg border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="w-16 h-16 rounded-2xl bg-pink-100 dark:bg-pink-500/10 flex items-center justify-center mb-5">

            <FaServer className="text-3xl text-pink-500" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Backend Development
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Developing secure backend systems with Node.js, Express.js,
            MongoDB, REST APIs, JWT authentication, and database integration.
          </p>
        </div>

        {/* Card 3 */}
        <div className="group bg-white dark:bg-[#1e293b] rounded-3xl p-7 shadow-lg border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="w-16 h-16 rounded-2xl bg-purple-100 dark:bg-purple-500/10 flex items-center justify-center mb-5">

            <FaLaptopCode className="text-3xl text-purple-500" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Full Stack Projects
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Experienced in building MERN stack applications including analytics
            dashboards, blogging platforms, and responsive business websites.
          </p>
        </div>

        {/* Card 4 */}
        <div className="group bg-white dark:bg-[#1e293b] rounded-3xl p-7 shadow-lg border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

          <div className="w-16 h-16 rounded-2xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center mb-5">

            <FaRocket className="text-3xl text-green-500" />
          </div>

          <h3 className="text-xl font-bold mb-3">
            Performance & Growth
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Passionate about improving application performance, solving complex
            problems, and continuously learning modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

