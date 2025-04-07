// fetchPOI.js
export const fetchPOIs = async (lat, lon, category = 'all') => {
    let query = `
      [out:json][timeout:25];
      (
        node["amenity"${category !== 'all' ? `="${category}"` : ""}](around:3000, ${lat}, ${lon});
      );
      out body;
      >;
      out skel qt;
    `;
  
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();

      const formatted = data.elements.map(el => ({
        lat: el.lat,
        lon: el.lon,
        name: el.tags?.name || el.tags?.amenity || 'Unnamed POI',
        category: el.tags?.amenity || 'Unknown Category',
      distance: el.tags?.distance || null // Adding distance, if available
      }));
      return formatted;
    } catch (err) {
      console.error("Error fetching POIs:", err);
      return [];
    }
  };
  