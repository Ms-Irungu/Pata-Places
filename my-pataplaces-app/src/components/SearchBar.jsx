import React, { useState } from 'react';
import { Search, Compass } from 'lucide-react';


const SearchBar = ({ onSearch, isDarkMode, onUseGPS }) => {
    const [query, setQuery] = useState(''); //Initialize state to hold the search query
    
    const handleInputChange = (event) => {
        setQuery(event.target.value); // Update the state with the input value
    };
    
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // Check if the query is not empty before calling the onSearch function
        // Only call onSearch if the query is not just whitespace
        if (query.trim()) {
        onSearch(query); // Call the onSearch function passed from the parent component with the current query
        setQuery(''); // Clear the input field after submission
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto mt-4">
            <div className="flex gap-2">
        <div className="relative flex-1">
        <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a location..."
            className={`w-full px-4 py-2 pl-10 pr-4 rounded-lg border
                 ${isDarkMode ? "border-gray-600 bg-gray-700 text-white" : "border-gray-300 bg-white text-gray-900"}  
                 focus:outline-none focus:ring-2 focus:ring-blue-500`}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Search
        </button>
        <button
          type="button"
          onClick={onUseGPS} // Call the GPS function when clicked
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <Compass className="h-5 w-5" />
        </button>
            </div>
        </form>
    );
}

export default SearchBar;
