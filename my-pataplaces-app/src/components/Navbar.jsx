import React from "react";
import { Sun, Moon, MapPin } from "lucide-react";

//component accepts isDarkMode and toggleDarkMode as props.
// isDarkMode is a boolean value that tells whether the app is in dark mode (true) or light mode (false).
// toggleDarkMode is a function that changes the mode from dark to light or vice versa when called.
const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav className={`flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} shadow-md`}>
      {/* Logo & Name */}
      <div className="flex items-center gap-2 mb-2 sm:mb-0">
        <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-5 md:h-5 lg:w-7 lg:h-7" />
        <div>
          <h1 className="text-xl sm:text-lg font-bold">Pata Places</h1>
          <p className="text-xs sm:text-sm">Find the Nearest Places Near You</p>
        </div>
      </div>

      {/* Theme Toggle */}
      <button onClick={toggleDarkMode} className="p-2 mr-40 rounded-full hover:bg-gray-700 transition">
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </nav>
  );
};

export default Navbar;
