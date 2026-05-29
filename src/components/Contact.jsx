import React, { useState } from "react";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaUserTie,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "918936096607";

    const text = `
Hello Bhargav,

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-20 px-5 sm:px-8 md:px-16 bg-[#f8fafc] dark:bg-[#0f172a] text-gray-800 dark:text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Have a project in mind or looking for a MERN Stack Developer?
            Feel free to reach out and let's build something amazing together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}
          <div className="grid sm:grid-cols-2 gap-6">

            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300">
              <FaEnvelope className="text-4xl text-orange-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Email
              </h3>

              <p className="text-gray-600 dark:text-gray-300 break-all">
                bhargavsinha93@gmail.com
              </p>
            </div>

            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300">
              <FaWhatsapp className="text-4xl text-green-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                WhatsApp
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                +91 8936096607
              </p>
            </div>

            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300">
              <FaMapMarkerAlt className="text-4xl text-red-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Location
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Jaipur, Rajasthan
              </p>
            </div>

            <div className="bg-white dark:bg-[#1e293b] p-6 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 hover:-translate-y-2 transition-all duration-300">
              <FaUserTie className="text-4xl text-purple-500 mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Availability
              </h3>

              <p className="text-gray-600 dark:text-gray-300">
                Open for Internship & Freelance
              </p>
            </div>

          </div>

          {/* Right Side Form */}
          <div className="bg-white dark:bg-[#1e293b] p-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="
                w-full
                py-4
                rounded-xl
                text-white
                font-semibold
                text-lg
                bg-gradient-to-r
                from-orange-400
                via-pink-500
                to-purple-500
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-lg
                "
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;