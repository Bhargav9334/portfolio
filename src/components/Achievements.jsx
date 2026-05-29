import React from "react";
import {
  FaLaptopCode,
  FaBriefcase,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaLaptopCode />,
    number: "10+",
    title: "Projects Built",
    description:
      "Developed full-stack and frontend applications using modern web technologies.",
  },
  {
    icon: <FaBriefcase />,
    number: "3+",
    title: "Internships",
    description:
      "Hands-on industry experience in frontend and full-stack development.",
  },
  {
    icon: <FaCode />,
    number: "15+",
    title: "Technologies",
    description:
      "Worked with React, Next.js, Node.js, Express, MongoDB, Tailwind and more.",
  },
  {
    icon: <FaRocket />,
    number: "100%",
    title: "Responsive Design",
    description:
      "Built mobile-friendly and cross-device compatible user interfaces.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#0f172a] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold">
            My{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-gray-400 leading-relaxed">
            A quick overview of my journey, experience, and technical growth as
            a Full-Stack MERN Developer.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-3xl p-8 text-center shadow-xl border border-white/5 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center text-5xl text-orange-500 mb-6">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-3">
                {item.number}
              </h3>

              <h4 className="text-2xl font-semibold mb-4">
                {item.title}
              </h4>

              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;