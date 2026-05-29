// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";   
import Projects from "./components/Project";
import TechStack from "./components/TechStack";
import Achievements from "./components/Achievements";  
import WhyHireMe from "./components/WhyHireMe";      
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans scroll-smooth bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <Navbar />
      <main className="pt-5 md:pt-[20px]">
        <Hero />
        <About /> 
        <Experience />
       <Projects />
         <TechStack />
         <Achievements />
         <WhyHireMe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
