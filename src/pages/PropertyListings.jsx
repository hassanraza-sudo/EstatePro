import React, { useState } from 'react';
import PropertyCard from '../components/property/PropertyCard';
import SearchFilters from '../components/search/SearchFilters';

function PropertyListings() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Property Listings</h1>
      
      {/* Search and Filters Section */}
      <div className="mb-8">
        <SearchFilters />
      </div>

      {/* Properties Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default PropertyListings;