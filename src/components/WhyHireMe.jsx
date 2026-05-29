import React from "react";
import {
  FaCode,
  FaRocket,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "Write maintainable, scalable, and industry-standard code using modern development practices.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Learner",
    description:
      "Quickly adapt to new technologies, frameworks, and project requirements.",
  },
  {
    icon: <FaUsers />,
    title: "Team Collaboration",
    description:
      "Experienced in working with teams, version control systems, and collaborative workflows.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "Strong analytical thinking and ability to build practical solutions for real-world challenges.",
  },
];

const WhyHireMe = () => {
  return (
    <section
      id="whyhireme"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Why{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Hire Me
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Combining technical expertise, practical experience, and a passion
            for building high-quality web applications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {reasons.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1e293b] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-5xl text-orange-500 mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyHireMe;