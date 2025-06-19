import React, { useState } from 'react';
import PropertyCard from '../components/property/PropertyCard';
import SearchFilters from '../components/search/SearchFilters';
import { Search, XCircle } from 'lucide-react';

function PropertyListings() {
  const [properties, setProperties] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Find Your Dream Property
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Browse handpicked listings tailored to your needs. Use filters to refine your search.
        </p>
      </div>

      {/* Filters */}
      <div className="bg-slate-600 border border-gray-400 rounded-2xl shadow-md p-6 mb-12">
        <SearchFilters />
      </div>

      {/* Listings */}
      {isLoading ? (
        <div className="flex justify-center items-center h-60">
          <div className="h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : properties.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <XCircle className="h-14 w-14 text-gray-400 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">No Properties Found</h2>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200"
          >
            <Search className="h-5 mr-2" />
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default PropertyListings;
