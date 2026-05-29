import React, { useEffect, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "Excel Analytics Platform",
    description:
      "A full-stack Excel Analytics Platform that allows users to upload Excel files, visualize data with interactive charts, manage reports, and analyze datasets efficiently. Built using React.js, Node.js, Express.js, MongoDB, Chart.js, JWT Authentication, and Tailwind CSS.",

    images: [
      "/projects/excel1.png",
      "/projects/excel2.png",
    ],

    github:
      "https://github.com/Bhargav9334/excel-analytics",

    live:
      "https://your-excel-platform.vercel.app",
  },

  {
    title: "Blogging Platform",
    description:
      "A MERN Stack Blogging Platform featuring secure JWT authentication, CRUD operations, post management, responsive UI, and MongoDB integration. Users can create, edit, delete, and manage blogs with a smooth user experience.",

    images: [
      "/projects/blog1.png",
      "/projects/blog2.png",
    ],

    github:
      "https://github.com/Bhargav9334/blog",

    live:
      "https://your-blog-platform.vercel.app",
  },

  {
    title: "Weather Forecast App",
    description:
      "A responsive weather forecasting application that provides real-time weather updates, humidity, wind speed, temperature, and location-based forecasts using OpenWeatherMap API and Geolocation API.",

    images: [
      "/projects/weather1.png",
      "/projects/weather2.png",
    ],

    github:
      "https://github.com/yourusername/weather-forecast-app",

    live:
      "https://weather-forecast-five-orcin.vercel.app/",
  },

  {
    title: "Online Code Editor",
    description:
      "An interactive online code editor supporting HTML, CSS, and JavaScript with real-time preview functionality. Designed for developers and students to test frontend code instantly in a clean environment.",

    images: [
      "/projects/code1.png",
      "/projects/code2.png",
    ],

    github:
      "https://github.com/Bhargav9334/code-editor",

    live:
      "https://your-code-editor.vercel.app",
  },
];

const Projects = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Array(projects.length).fill(0)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prev) =>
        prev.map((item, index) => {
          const total =
            projects[index].images.length;

          return (item + 1) % total;
        })
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#f8fafc] dark:bg-[#111827] text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A collection of projects showcasing
            my experience in frontend, backend,
            and full-stack web development.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center gap-10 lg:gap-16`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2">
                  <div className="overflow-hidden rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800">
                    <img
                      src={
                        project.images[
                          currentIndexes[index]
                        ]
                      }
                      alt={project.title}
                      className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover transition-all duration-700 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-xl border border-gray-200 dark:border-gray-800">
                    <h3 className="text-3xl font-bold mb-4">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-900 text-white hover:bg-black transition"
                      >
                        <FaGithub />
                        GitHub
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 text-white hover:opacity-90 transition"
                      >
                        <FaExternalLinkAlt />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;