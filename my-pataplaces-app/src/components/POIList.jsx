import React from 'react'
import { MapPin } from 'lucide-react'

const POIList = ({ pois, isDarkMode }) => {
  return (
    <div
      className={`bg-white mt-6 rounded-lg shadow-md overflow-hidden ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
    >
      <div
        className={`p-4 ${
          isDarkMode ? 'bg-gray-700' : 'bg-emerald-50'
        } border-b border-emerald-100`}
      >
        <h2
          className={`text-lg font-semibold ${
            isDarkMode ? 'text-white' : 'text-emerald-800'
          }`}
        >
          Nearby Points of Interest
        </h2>
      </div>
      <div className='divide-y'>
        {' '}
        {/*This will create a dividing line between each POI item*/}
        {pois && pois.length > 0 ? (
          pois.map(poi => (
            <div
              key={poi.id}
              className={`p-4 cursor-pointer transition-colors ${
                isDarkMode
                  ? 'text-white  hover:bg-gray-900'
                  : 'text-black  hover:bg-gray-50'
              }`}
              // Assuming you want to trigger a modal or some event on click, you can handle it here.
            >
              <div className='flex items-start gap-3'>
                <MapPin
                  className={`h-5 w-5 ${
                    isDarkMode ? 'text-white' : 'text-emerald-500'
                  } mt-1`}
                />
                <div>
                  <h3 className='font-medium'>{poi.name}</h3>
                  <p className='text-sm text-gray-600'>{poi.category}</p>
                  <p className='text-sm text-emerald-600 mt-1'>
                      <button 
                      className='bg-emerald-500 text-white px-4 py-2 rounded-md hover:bg-emerald-600 transition duration-200'
                      onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${poi.name}`)}
                      >
                        Get Directions
                      </button>
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className='p-4 text-center text-gray-500'>
            No points of interest found.
          </p>
        )}
      </div>
    </div>
  )
}

export default POIList
