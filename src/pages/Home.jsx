import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, MapPin, Building, Home as HomeIcon, Warehouse, DollarSign, Star } from 'lucide-react';
import PropertyCard from '../components/property/PropertyCard.jsx';
import { fetchFeaturedProperties } from '../utils/api.jsx';

const Home = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });
  const [featuredProperties, setFeaturedProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchFeaturedProperties();
        setFeaturedProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      } finally {
        setLoading(false);
      }
    };
    
    getProperties();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to properties page with search params
    window.location.href = `/properties?location=${searchParams.location}&type=${searchParams.propertyType}&price=${searchParams.priceRange}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen max-h-[800px]">
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)' }}
        ></div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Find Your Dream Property
              </h1>
              <p className="text-xl text-white mb-8 drop-shadow-md">
                Discover the perfect property with our extensive listings and expert agents.
              </p>
              
              {/* Search form */}
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="location" className="label">Location</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={searchParams.location}
                          onChange={handleChange}
                          placeholder="City, ZIP or Address"
                          className="input pl-10"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="propertyType" className="label">Property Type</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="propertyType"
                          name="propertyType"
                          value={searchParams.propertyType}
                          onChange={handleChange}
                          className="input pl-10"
                        >
                          <option value="">Any Type</option>
                          <option value="house">House</option>
                          <option value="apartment">Apartment</option>
                          <option value="condo">Condo</option>
                          <option value="townhouse">Townhouse</option>
                          <option value="land">Land</option>
                          <option value="commercial">Commercial</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="priceRange" className="label">Price Range</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <DollarSign className="h-5 w-5 text-gray-400" />
                        </div>
                        <select
                          id="priceRange"
                          name="priceRange"
                          value={searchParams.priceRange}
                          onChange={handleChange}
                          className="input pl-10"
                        >
                          <option value="">Any Price</option>
                          <option value="0-100000">$0 - $100,000</option>
                          <option value="100000-300000">$100,000 - $300,000</option>
                          <option value="300000-500000">$300,000 - $500,000</option>
                          <option value="500000-1000000">$500,000 - $1,000,000</option>
                          <option value="1000000+">$1,000,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <button type="submit" className="btn btn-primary w-full mt-4">
                    <Search className="h-5 w-5 mr-2" />
                    Search Properties
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured properties section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Featured Properties
            </h2>
            <Link to="/properties" className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
              View All <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProperties.map(property => (
                <PropertyCard 
                  key={property.id} 
                  property={property} 
                />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Property types section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Browse by Property Type
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Houses', icon: <HomeIcon className="h-10 w-10 mb-4 text-blue-600" />, count: 245, path: '/properties?type=house' },
              { name: 'Apartments', icon: <Building className="h-10 w-10 mb-4 text-blue-600" />, count: 187, path: '/properties?type=apartment' },
              { name: 'Commercial', icon: <Warehouse className="h-10 w-10 mb-4 text-blue-600" />, count: 102, path: '/properties?type=commercial' },
              { name: 'Luxury', icon: <Star className="h-10 w-10 mb-4 text-blue-600" />, count: 53, path: '/properties?type=luxury' },
            ].map((type, index) => (
              <Link to={type.path} key={index} className="bg-gray-50 hover:bg-gray-100 transition-colors rounded-lg p-6 text-center group">
                {type.icon}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-blue-600 font-medium">{type.count} Properties</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* How it works section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            How It Works
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Find Properties', description: 'Browse our extensive property listings to find your perfect match.' },
              { step: 2, title: 'Contact Agent', description: 'Connect with our experienced agents who will guide you through the process.' },
              { step: 3, title: 'Close the Deal', description: 'Finalize the purchase or rental agreement with confidence.' },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have found their perfect property through our platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties" className="btn bg-white text-blue-600 hover:bg-gray-100">
              Browse Properties
            </Link>
            <Link to="/contact" className="btn border border-white text-white hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;