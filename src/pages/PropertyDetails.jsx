import React from 'react';
import { useParams } from 'react-router-dom';
import BookingForm from '../components/forms/BookingForm';
import ImageGallery from '../components/ui/ImageGallery';
import ChatBox from '../components/chat/ChatBox';
import { useAuth } from '../contexts/AuthContext';

function PropertyDetails() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <ImageGallery />
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Beautiful Property Title</h1>
            <p className="text-lg text-gray-600 mb-4">123 Example Street, City, State</p>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl font-bold text-primary">$500,000</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">For Sale</span>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Bedrooms</p>
                <p className="text-xl font-semibold">4</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Bathrooms</p>
                <p className="text-xl font-semibold">3</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-600">Area</p>
                <p className="text-xl font-semibold">2,500 sq ft</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <p className="text-gray-600 mb-6">
              This beautiful property features modern amenities, spacious rooms, and a prime location.
              Perfect for families looking for their dream home. The house comes with a large backyard,
              updated kitchen, and plenty of natural light throughout.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="grid grid-cols-2 gap-4 mb-6">
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Central Air Conditioning
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Hardwood Floors
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Garage Parking
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2">✓</span> Modern Kitchen
              </li>
            </ul>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="space-y-6">
          <BookingForm propertyId={id} />
          
          {isAuthenticated && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <ChatBox propertyId={id} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;