import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar"; 
import POICategories from "../components/POICategories";
import MapDisplay from "../components/MapDisplay"; // Import your map component

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
    <div className="min-h-screen ">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <SearchBar isDarkMode={isDarkMode}/>
        <POICategories isDarkMode={isDarkMode} selectedCategory="all" onCategoryChange={() => {}} />
        {/* Add your map or other components here */}
        <MapDisplay />
        {/* You can replace the above MapDisplay with your actual map component */}
      </main>
    </div>
  );
};

export default Home;
