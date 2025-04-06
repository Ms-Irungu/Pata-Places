import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar"; 
import POICategories from "../components/POICategories";
import MapDisplay from "../components/MapDisplay"; // Import your map component
import { fetchPOIs } from "../utilities/fetchPOIs"; //Import your POI Fetcher


const Home = () => {
  // 1️⃣ Set initial theme to dark
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || !localStorage.getItem("theme");
  });

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [center, setCenter] = useState([-1.286389, 36.817223]); // Default: Nairobi
  const [markers, setMarkers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [noResults, setNoResults] = useState(false);


  // 2️⃣ Update theme when user toggles
  useEffect(() => {
    document.body.className = isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

   // 3️⃣ Toggle function
   const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const fetchAndUpdatePOIs = async (lat, lon, category = selectedCategory) => {
    setLoading(true);
    setNoResults(false);
    try {
      const data = await fetchPOIs(lat, lon, category);
      setMarkers(data);
      setCenter([lat, lon]);
      setNoResults(data.length === 0);
    } catch (err) {
      console.error("Error fetching POIs:", err);
      setNoResults(true);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (placeName) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${placeName}`);
      const results = await response.json();
      if (results.length > 0) {
        const { lat, lon } = results[0];
        fetchAndUpdatePOIs(parseFloat(lat), parseFloat(lon));
      } else {
        setMarkers([]);
        setNoResults(true);
      }
    } catch (err) {
      console.error("Geocoding error:", err);
    }
  };

  const handleUseGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          fetchAndUpdatePOIs(latitude, longitude);
        },
        (error) => {
          alert("Could not get your location.");
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    fetchAndUpdatePOIs(center[0], center[1], categoryId);
  };
 

  return (
    <div className="min-h-screen ">
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <SearchBar 
        isDarkMode={isDarkMode}
        onSearch={handleSearch}
        onUseGPS={handleUseGPS}
        />
        <POICategories 
        isDarkMode = {isDarkMode} 
        selectedCategory = {selectedCategory}
        onCategoryChange = {handleCategoryChange}
        />

        {loading && <p className="text-center mt-6 text-blue-500">Loading places...</p>}
        {!loading && noResults && <p className="text-center mt-6 text-red-500">No places found.</p>}

        {/* Add your map or other components here */}
        <MapDisplay 
          center={center} 
          zoom={13}
          markers={markers}
        />
      </main>
    </div>
  );
};

export default Home;
