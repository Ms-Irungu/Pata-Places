# Pata-Places
🚀 Pata Places is a Single Page Application (SPA) that helps users find Points of Interest (POIs) near them in Kenya. 🗺️ Using the OpenStreetMap Overpass API, users can search for locations 🔍, use GPS 📍 to find nearby places, and view results on an interactive map 🗺️.

## 🚀 Overview
Pata Places is a **Single Page Application (SPA)** designed to help users find **Points of Interest (POIs)** near them in **Kenya**. Using the **OpenStreetMap Overpass API**, users can **search for locations**, **use GPS** to find nearby places, and **view results on an interactive map**.

## ✨ Features
- **🔍 Search for Places** – Users can enter a location or use GPS to find nearby POIs.
- **📌 POI Categories** – Select categories like hospitals, schools, restaurants, etc.
- **🗺️ Interactive Map** – Displays POIs on a Leaflet.js-powered map.
- **🌗 Light/Dark Mode** – Toggle between themes for a personalized experience.
- **ℹ️ POI Details** – View information about each POI in a card format.

## 🔗 API Used
We will use the **OpenStreetMap Overpass API**, which allows querying geographic data based on specific locations and categories. It is free and provides detailed, real-time geographic data.

## 🏗️ Project Structure
```
/src
 ├── /components
 │   ├── Navbar.jsx
 │   ├── SearchBar.jsx
 │   ├── POICategories.jsx
 │   ├── MapDisplay.jsx
 │   ├── POIList.jsx
 │   ├── POICard.jsx
 │
 ├── /pages
 │   ├── Home.jsx
 │
 ├── /utils
 │   ├── fetchPOIs.js
 │
 ├── App.jsx
 ├── main.jsx
```

### 📂 Explanation of Key Files
- **Home.jsx** – The main page where all components are rendered.
- **fetchPOIs.js** – A utility function to fetch POIs from the Overpass API.
- **App.jsx** – The main component that sets up routing and global state.
- **main.jsx** – The entry point of the React application.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Leaflet.js
- **State Management:** useState & useEffect
- **API:** OpenStreetMap Overpass API
- **Deployment:** Vercel or Netlify

---
Made with ❤️ by **Pata Places Team**
