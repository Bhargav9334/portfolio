
import React from "react";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "Navrasa IT Solutions",
    duration: "May 2026 - Present",
    location: "Jaipur, Rajasthan",
    color: "from-orange-400 to-pink-500",
    points: [
      "Developing responsive frontend applications using React.js, Tailwind CSS, and modern UI practices.",
      "Working on live client projects and integrating REST APIs with frontend systems.",
      "Building reusable UI components to improve scalability and maintainability.",
      "Collaborating with development teams to improve performance and user experience.",
    ],
  },

  {
    role: "Full-Stack Developer Intern",
    company: "Zidio Development",
    duration: "May 2025 - July 2025",
    location: "Remote",
    color: "from-pink-500 to-purple-500",
    points: [
      "Developed MERN stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented secure JWT authentication and backend API integration.",
      "Optimized frontend responsiveness and application performance.",
      "Used Git and GitHub for version control and collaborative development workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl sm:text-5xl font-bold">
          Work{" "}

          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <p className="mt-5 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          My professional journey and hands-on experience in frontend and
          full-stack web development.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Center Line */}
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-400 via-pink-500 to-purple-500 rounded-full transform md:-translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative mb-14 flex flex-col md:flex-row ${
              index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"
            }`}
          >
            {/* Timeline Icon */}
            <div className="absolute left-0 md:left-1/2 top-5 transform md:-translate-x-1/2 z-10">

              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center shadow-lg`}
              >
                <FaBriefcase className="text-white text-lg" />
              </div>
            </div>

            {/* Card */}
            <div className="ml-16 md:ml-0 md:w-[45%]">

              <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-7 shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">

                {/* Top */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p
                      className={`text-sm font-semibold mt-1 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <p>{exp.duration}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>

                {/* Points */}
                <ul className="space-y-3">

                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                    >
                      <span
                        className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-r ${exp.color}`}
                      ></span>

                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

