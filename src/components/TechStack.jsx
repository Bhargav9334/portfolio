
import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    icon: <FaHtml5 className="text-orange-500" />,
    name: "HTML",
  },
  {
    icon: <FaCss3Alt className="text-blue-500" />,
    name: "CSS",
  },
  {
    icon: <FaJs className="text-yellow-400" />,
    name: "JavaScript",
  },
  {
    icon: <FaReact className="text-cyan-400" />,
    name: "React",
  },
  {
    icon: (
      <SiNextdotjs className="text-black dark:text-white" />
    ),
    name: "Next.js",
  },
  {
    icon: (
      <SiTailwindcss className="text-teal-400" />
    ),
    name: "Tailwind",
  },
  {
    icon: <FaNode className="text-green-500" />,
    name: "Node.js",
  },
  {
    icon: (
      <SiExpress className="text-gray-600 dark:text-gray-300" />
    ),
    name: "Express",
  },
  {
    icon: <SiMongodb className="text-green-600" />,
    name: "MongoDB",
  },
  {
    icon: (
      <FaGithub className="text-gray-800 dark:text-gray-200" />
    ),
    name: "GitHub",
  },
];

const TechStack = () => {
  return (
    <section
      id="techstack"
      className="py-20 px-5 sm:px-8 md:px-16 bg-white dark:bg-[#0f172a] text-gray-800 dark:text-white"
    >
      {/* Heading */}
      <div className="text-center mb-14">

        <h2 className="text-4xl sm:text-5xl font-bold">

          My{" "}

          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Technologies and tools I use to build scalable, responsive,
          and modern full-stack web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="group bg-gray-100 dark:bg-[#1e293b] rounded-2xl p-5 flex flex-col items-center justify-center shadow-lg border border-gray-200 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition duration-300">
              {skill.icon}
            </div>

            <p className="text-sm sm:text-base font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;

