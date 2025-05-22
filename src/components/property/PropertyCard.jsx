import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Home, Bed, Bath, Square, Heart } from 'lucide-react';

const PropertyCard = ({ property, saved = false, onSaveToggle }) => {
  const { 
    id, 
    title, 
    price, 
    address, 
    bedrooms, 
    bathrooms, 
    area, 
    imageUrl, 
    type,
    isFeatured = false,
    isNew = false
  } = property;

  return (
    <div className="card group hover:shadow-lg">
      <div className="relative overflow-hidden h-48 sm:h-64">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button 
            onClick={(e) => {
              e.preventDefault();
              onSaveToggle && onSaveToggle(id);
            }}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <Heart className={`h-5 w-5 ${saved ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
          </button>
        </div>
        <div className="absolute top-2 left-2 flex gap-2">
          {isFeatured && (
            <span className="badge badge-blue">
              Featured
            </span>
          )}
          {isNew && (
            <span className="badge badge-green">
              New
            </span>
          )}
          <span className={`badge ${type === 'For Sale' ? 'badge-amber' : 'badge-blue'}`}>
            {type}
          </span>
        </div>
      </div>
      <Link to={`/properties/${id}`} className="block">
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-1 line-clamp-1">{title}</h3>
            <p className="text-lg font-bold text-blue-600">${price.toLocaleString()}</p>
          </div>
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <p className="text-sm line-clamp-1">{address}</p>
          </div>
          <div className="flex justify-between pt-2 border-t border-gray-100">
            <div className="flex items-center text-gray-700">
              <Bed className="h-4 w-4 mr-1" />
              <span className="text-sm">{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Bath className="h-4 w-4 mr-1" />
              <span className="text-sm">{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <Square className="h-4 w-4 mr-1" />
              <span className="text-sm">{area} sq ft</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;