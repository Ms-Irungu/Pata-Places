import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar"; 
import POICategories from "../components/POICategories";
import MapDisplay from "../components/MapDisplay"; // Import your map component
import { fetchPOIs } from "../utilities/fetchPOIs";


const Home = () => {
  // 1️⃣ Set initial theme to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
  });

  const [userLocation, setUserLocation] = useState({ lat: -1.286389, lon: 36.817223 }); // Default to Nairobi
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [markers, setMarkers] = useState([]);


  // 2️⃣ Update theme when user toggles
  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Get user location on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({ lat: position.coords.latitude, lon: position.coords.longitude });
      },
      (err) => {
        console.warn("Could not get location, using default Nairobi:", err.message);
      }
    );
  }, []);

  // Fetch POIs whenever location or category changes
  useEffect(() => {
    if (userLocation.lat && userLocation.lon) {
      fetchPOIs(userLocation.lat, userLocation.lon, selectedCategory).then(setMarkers);
    }
  }, [userLocation, selectedCategory]);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  // 3️⃣ Toggle function
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen ">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <SearchBar isDarkMode={isDarkMode}/>
        <POICategories 
        isDarkMode = {isDarkMode} 
        selectedCategory = {selectedCategory}
        onCategoryChange = {handleCategoryChange}
        />
        {/* Add your map or other components here */}
        <MapDisplay 
          center={[userLocation.lat, userLocation.lon]} // Center the map on user's location
          zoom={13} // Default zoom level
          markers={markers.map(marker => ({ lat: marker.lat, lon: marker.lon, name: marker.name }))} // Convert POIs to markers format
          isDarkMode={isDarkMode} // Pass dark mode state to the map component if needed
        />
        
      </main>
    </div>
  );
};

export default Home;
