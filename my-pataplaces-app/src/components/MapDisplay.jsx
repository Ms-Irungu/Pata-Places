import React, { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const FlyToCenter = ({ center }) => {
  const map = useMap()

  useEffect(() => {
    if (center && map) {
      map.flyTo(center, map.getZoom(), {
        // animate: true,
        duration: 1.5 // seconds
      })
    }
  }, [center, map])

  return null
}

// Custom marker icons
const defaultIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
})

const selectedIcon = new L.Icon({
  iconUrl:
    'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45]
})

const MapDisplay = ({
  center = [-1.286389, 36.817223],
  zoom = 15,
  markers = [],
  selectedPOI
}) => {

  return (
    <div className='w-full h-[70vh] rounded-lg overflow-hidden mt-6 shadow'>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className='w-full h-full z-0'
      >
        {/* Recenter the map when 'center' prop changes */}
        <FlyToCenter center={center} />

        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {markers.map(marker => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lon]}
            icon={
              selectedPOI && selectedPOI.id === marker.id
                ? selectedIcon
                : defaultIcon
            }
          >
            <Popup>
              <div>
                <h3 className='font-bold'>{marker.name}</h3>
                <p className='text-sm'>{marker.category}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default MapDisplay
