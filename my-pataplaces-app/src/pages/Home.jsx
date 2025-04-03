import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const Home = () => {
  // 1️⃣ Set initial theme to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
  });

  // 2️⃣ Update theme when user toggles
  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // 3️⃣ Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="p-8">
        <h2 className="text-2xl font-semibold">Welcome to Pata Places</h2>
        <p>Explore nearby places with ease.</p>
      </div>
    </div>
  );
};

export default Home;
