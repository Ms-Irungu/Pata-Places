import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapDisplay = ({ center = [-1.286389, 36.817223], zoom = 13, markers = [{ lat: -1.286389, lon: 36.817223, name: "Nairobi"}] }) => {
    return (
      <div className="w-full h-[70vh] rounded-lg overflow-hidden mt-6 shadow">
        <MapContainer center={center} zoom={zoom} scrollWheelZoom={true} className="w-full h-full z-0">
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
  
          {markers.map((marker, index) => (
            <Marker key={index} position={[marker.lat, marker.lon]}>
              <Popup>{marker.name || 'POI'}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    );
  };
  
  export default MapDisplay;