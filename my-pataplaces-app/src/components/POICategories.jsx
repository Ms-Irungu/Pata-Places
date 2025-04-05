// POICategories.jsx
import React from 'react'
import {
  Landmark,
  Utensils,
  Coffee,
  Hospital,
  School,
  ShoppingBag,
  Hotel,
  Building2
} from 'lucide-react'

const categories = [
  { id: 'all', name: 'All Places', icon: <Landmark /> },
  { id: 'restaurant', name: 'Restaurants', icon: <Utensils /> },
  { id: 'cafe', name: 'Cafes', icon: <Coffee /> },
  { id: 'hospital', name: 'Hospitals', icon: <Hospital /> },
  { id: 'school', name: 'Schools', icon: <School /> },
  { id: 'shop', name: 'Shopping', icon: <ShoppingBag /> },
  { id: 'hotel', name: 'Hotels', icon: <Hotel /> },
  { id: 'office', name: 'Offices', icon: <Building2 /> }
]

const POICategories = ({ selectedCategory, onCategoryChange, isDarkMode }) => {
  return (
    <div className='flex flex-wrap gap-2 justify-center mt-6'>
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium 
           ${
             selectedCategory === category.id
               ? 'bg-blue-500 text-white'
               : isDarkMode
               ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
               : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
           }`}
        >
          {category.icon}
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default POICategories
