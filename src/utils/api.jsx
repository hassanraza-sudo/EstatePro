// Mock API functions
const PROPERTIES_DATA = [
  {
    id: 1,
    title: "Modern Waterfront Villa",
    price: 1250000,
    address: "123 Coastal Drive, Miami, FL 33101",
    description: "Luxurious waterfront villa with breathtaking ocean views. This modern masterpiece features an open floor plan, high ceilings, and floor-to-ceiling windows that flood the space with natural light. The gourmet kitchen is equipped with top-of-the-line appliances and custom cabinetry.",
    bedrooms: 5,
    bathrooms: 4.5,
    area: 4200,
    imageUrl: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: true,
    isNew: true,
    images: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Pool", "Garden", "Garage", "Waterfront", "Air Conditioning", "Security System"],
    propertyType: "house",
    yearBuilt: 2021,
    parkingSpaces: 3,
    agentId: 2,
    agentName: "Sarah Johnson",
    agentPhone: "305-555-1234",
    agentEmail: "sarah@estatepro.com"
  },
  {
    id: 2,
    title: "Downtown Luxury Apartment",
    price: 850000,
    address: "456 Urban Lane, New York, NY 10001",
    description: "Contemporary luxury apartment in the heart of downtown with stunning city views. This high-rise residence offers premium finishes throughout, including hardwood floors, quartz countertops, and designer fixtures. The building features 24-hour security, a fitness center, and a rooftop lounge.",
    bedrooms: 2,
    bathrooms: 2,
    area: 1800,
    imageUrl: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: true,
    isNew: false,
    images: [
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Elevator", "Gym", "Concierge", "Balcony", "Central AC", "In-unit Laundry"],
    propertyType: "apartment",
    yearBuilt: 2019,
    parkingSpaces: 1,
    agentId: 3,
    agentName: "Michael Chen",
    agentPhone: "212-555-6789",
    agentEmail: "michael@estatepro.com"
  },
  {
    id: 3,
    title: "Suburban Family Home",
    price: 575000,
    address: "789 Maple Street, Chicago, IL 60007",
    description: "Charming family home in a peaceful suburban neighborhood. This well-maintained property offers spacious living areas, updated kitchen and bathrooms, and a large backyard perfect for entertaining. The finished basement provides additional living space for a home office or recreation room.",
    bedrooms: 4,
    bathrooms: 3,
    area: 2600,
    imageUrl: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: false,
    isNew: true,
    images: [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Basement", "Fireplace", "Patio", "Garage", "Central Heating", "Fenced Yard"],
    propertyType: "house",
    yearBuilt: 2005,
    parkingSpaces: 2,
    agentId: 4,
    agentName: "Emily Rodriguez",
    agentPhone: "312-555-4321",
    agentEmail: "emily@estatepro.com"
  },
  {
    id: 4,
    title: "Modern Urban Loft",
    price: 3500,
    address: "101 Industrial Way, San Francisco, CA 94107",
    description: "Trendy industrial loft in a converted warehouse. This unique space features exposed brick walls, high ceilings with original beams, and large factory windows. The open concept layout is perfect for modern living and entertaining. Located in a vibrant neighborhood with shops, restaurants, and galleries.",
    bedrooms: 1,
    bathrooms: 1.5,
    area: 1200,
    imageUrl: "https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Rent",
    isFeatured: true,
    isNew: false,
    images: [
      "https://images.pexels.com/photos/1330753/pexels-photo-1330753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2079249/pexels-photo-2079249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["High Ceilings", "Exposed Brick", "Stainless Steel Appliances", "Hardwood Floors", "In-unit Laundry", "Roof Access"],
    propertyType: "apartment",
    yearBuilt: 1925,
    parkingSpaces: 1,
    agentId: 2,
    agentName: "Sarah Johnson",
    agentPhone: "415-555-9876",
    agentEmail: "sarah@estatepro.com"
  },
  {
    id: 5,
    title: "Beachfront Condo",
    price: 675000,
    address: "555 Ocean View Drive, San Diego, CA 92109",
    description: "Stunning beachfront condo with panoramic ocean views. Wake up to the sound of waves and enjoy breathtaking sunsets from your private balcony. This meticulously maintained unit features an updated kitchen, spa-like bathroom, and designer finishes throughout.",
    bedrooms: 2,
    bathrooms: 2,
    area: 1500,
    imageUrl: "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: true,
    isNew: false,
    images: [
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Beachfront", "Pool", "Hot Tub", "Fitness Center", "Balcony", "Security"],
    propertyType: "condo",
    yearBuilt: 2015,
    parkingSpaces: 2,
    agentId: 3,
    agentName: "Michael Chen",
    agentPhone: "619-555-8765",
    agentEmail: "michael@estatepro.com"
  },
  {
    id: 6,
    title: "Rustic Mountain Cabin",
    price: 425000,
    address: "222 Pine Ridge, Aspen, CO 81611",
    description: "Cozy mountain retreat nestled among towering pines. This authentic log cabin offers rustic charm with modern comforts, including a stone fireplace, updated kitchen, and spacious deck with mountain views. Perfect for year-round outdoor adventures or a peaceful getaway.",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    imageUrl: "https://images.pexels.com/photos/11292915/pexels-photo-11292915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: false,
    isNew: true,
    images: [
      "https://images.pexels.com/photos/11292915/pexels-photo-11292915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/128303/pexels-photo-128303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/3773571/pexels-photo-3773571.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Fireplace", "Wood Stove", "Deck", "Mountain Views", "Hiking Trails", "Wildlife"],
    propertyType: "house",
    yearBuilt: 1985,
    parkingSpaces: 2,
    agentId: 4,
    agentName: "Emily Rodriguez",
    agentPhone: "970-555-2345",
    agentEmail: "emily@estatepro.com"
  },
  {
    id: 7,
    title: "Luxury Penthouse Suite",
    price: 1750000,
    address: "999 Skyline Drive, Seattle, WA 98101",
    description: "Exclusive penthouse with 360-degree views of the city skyline and mountains. This premier residence offers unparalleled luxury with a private elevator entrance, gourmet kitchen, smart home technology, and a spacious terrace for entertaining. Building amenities include valet parking, concierge service, and a spa.",
    bedrooms: 3,
    bathrooms: 3.5,
    area: 3000,
    imageUrl: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Sale",
    isFeatured: true,
    isNew: false,
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/275484/pexels-photo-275484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Private Elevator", "Terrace", "Smart Home", "Wine Cellar", "Floor-to-Ceiling Windows", "Concierge"],
    propertyType: "penthouse",
    yearBuilt: 2020,
    parkingSpaces: 3,
    agentId: 2,
    agentName: "Sarah Johnson",
    agentPhone: "206-555-6543",
    agentEmail: "sarah@estatepro.com"
  },
  {
    id: 8,
    title: "Historic Brownstone",
    price: 2500,
    address: "333 Heritage Row, Boston, MA 02108",
    description: "Beautifully restored brownstone in a historic district. This elegant townhouse combines original architectural details with modern updates, including high ceilings, ornate moldings, a chef's kitchen, and a private garden. Walking distance to parks, shops, and public transportation.",
    bedrooms: 4,
    bathrooms: 2.5,
    area: 2800,
    imageUrl: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    type: "For Rent",
    isFeatured: false,
    isNew: false,
    images: [
      "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "https://images.pexels.com/photos/280232/pexels-photo-280232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ],
    amenities: ["Garden", "Fireplace", "Original Hardwood", "Gourmet Kitchen", "Crown Molding", "Bay Windows"],
    propertyType: "townhouse",
    yearBuilt: 1890,
    parkingSpaces: 1,
    agentId: 3,
    agentName: "Michael Chen",
    agentPhone: "617-555-7890",
    agentEmail: "michael@estatepro.com"
  }
];

// Fetch all properties
export const fetchProperties = async (filters = {}) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  let filteredProperties = [...PROPERTIES_DATA];
  
  // Apply filters
  if (filters.location) {
    const location = filters.location.toLowerCase();
    filteredProperties = filteredProperties.filter(
      property => property.address.toLowerCase().includes(location)
    );
  }
  
  if (filters.priceMin) {
    filteredProperties = filteredProperties.filter(
      property => property.price >= parseInt(filters.priceMin)
    );
  }
  
  if (filters.priceMax) {
    filteredProperties = filteredProperties.filter(
      property => property.price <= parseInt(filters.priceMax)
    );
  }
  
  if (filters.bedrooms) {
    filteredProperties = filteredProperties.filter(
      property => property.bedrooms >= parseInt(filters.bedrooms)
    );
  }
  
  if (filters.bathrooms) {
    filteredProperties = filteredProperties.filter(
      property => property.bathrooms >= parseInt(filters.bathrooms)
    );
  }
  
  if (filters.propertyType) {
    filteredProperties = filteredProperties.filter(
      property => property.propertyType === filters.propertyType
    );
  }
  
  if (filters.type) {
    filteredProperties = filteredProperties.filter(
      property => property.type.toLowerCase() === filters.type.toLowerCase()
    );
  }
  
  // More filters can be added as needed
  
  return filteredProperties;
};

// Fetch featured properties
export const fetchFeaturedProperties = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return PROPERTIES_DATA.filter(property => property.isFeatured);
};

// Fetch a single property by ID
export const fetchPropertyById = async (id) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const property = PROPERTIES_DATA.find(property => property.id === parseInt(id));
  
  if (!property) {
    throw new Error('Property not found');
  }
  
  return property;
};

// Save a property (favorite/bookmark)
export const saveProperty = async (propertyId, userId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would update a database
  return { success: true, message: 'Property saved successfully' };
};

// Remove a saved property
export const removeSavedProperty = async (propertyId, userId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would update a database
  return { success: true, message: 'Property removed from saved list' };
};

// Fetch saved properties for a user
export const fetchSavedProperties = async (userId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For demo purposes, return a subset of properties as "saved"
  return PROPERTIES_DATA.slice(0, 3);
};

// Add a new property
export const addProperty = async (propertyData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would add to a database
  const newProperty = {
    id: PROPERTIES_DATA.length + 1,
    ...propertyData,
    createdAt: new Date().toISOString()
  };
  
  return { success: true, property: newProperty };
};

// Update a property
export const updateProperty = async (propertyId, propertyData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would update a database
  return { success: true, message: 'Property updated successfully' };
};

// Delete a property
export const deleteProperty = async (propertyId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // In a real app, this would delete from a database
  return { success: true, message: 'Property deleted successfully' };
};

// Book a property viewing
export const bookPropertyViewing = async (bookingData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // In a real app, this would create a booking in a database
  return { 
    success: true, 
    message: 'Viewing scheduled successfully',
    bookingId: Math.floor(Math.random() * 1000000)
  };
};

// Fetch analytics data for dashboard
export const fetchAnalytics = async (userId, userRole) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  // Different data based on user role
  if (userRole === 'admin') {
    return {
      totalProperties: 256,
      totalUsers: 1248,
      totalAgents: 42,
      totalSales: 186,
      revenue: 2450000,
      recentActivity: [
        { id: 1, type: 'sale', property: 'Luxury Penthouse', amount: 1750000, date: '2023-07-15' },
        { id: 2, type: 'rental', property: 'Downtown Apartment', amount: 3500, date: '2023-07-14' },
        { id: 3, type: 'sale', property: 'Suburban Home', amount: 575000, date: '2023-07-12' },
        { id: 4, type: 'sale', property: 'Beachfront Condo', amount: 675000, date: '2023-07-10' }
      ],
      propertyDistribution: {
        house: 45,
        apartment: 30,
        condo: 15,
        townhouse: 5,
        commercial: 3,
        land: 2
      }
    };
  } else if (userRole === 'agent') {
    return {
      totalListings: 24,
      activeListings: 18,
      totalClients: 36,
      totalSales: 12,
      revenue: 240000,
      recentActivity: [
        { id: 1, type: 'sale', property: 'Modern Waterfront Villa', amount: 1250000, date: '2023-07-15' },
        { id: 2, type: 'viewing', property: 'Luxury Penthouse', client: 'John Smith', date: '2023-07-14' },
        { id: 3, type: 'inquiry', property: 'Beachfront Condo', client: 'Sarah Johnson', date: '2023-07-12' },
        { id: 4, type: 'sale', property: 'Downtown Apartment', amount: 850000, date: '2023-07-10' }
      ],
      propertyDistribution: {
        house: 10,
        apartment: 8,
        condo: 4,
        townhouse: 2
      }
    };
  } else if (userRole === 'landlord') {
    return {
      totalProperties: 8,
      occupiedProperties: 6,
      vacantProperties: 2,
      totalIncome: 12500,
      recentActivity: [
        { id: 1, type: 'rental', property: 'Modern Urban Loft', tenant: 'Michael Brown', amount: 3500, date: '2023-07-15' },
        { id: 2, type: 'maintenance', property: 'Historic Brownstone', issue: 'Plumbing', date: '2023-07-13' },
        { id: 3, type: 'payment', property: 'Suburban Apartment', tenant: 'Emma Wilson', amount: 2200, date: '2023-07-10' },
        { id: 4, type: 'inquiry', property: 'Downtown Condo', client: 'David Lee', date: '2023-07-08' }
      ],
      propertyDistribution: {
        house: 3,
        apartment: 3,
        condo: 2
      }
    };
  } else {
    // Buyer/Tenant
    return {
      savedProperties: 12,
      viewingRequests: 5,
      recentSearches: [
        { id: 1, location: 'Miami, FL', filters: { bedrooms: 3, price: '500000-1000000' }, date: '2023-07-15' },
        { id: 2, location: 'New York, NY', filters: { bedrooms: 2, type: 'apartment' }, date: '2023-07-13' },
        { id: 3, location: 'San Francisco, CA', filters: { propertyType: 'condo' }, date: '2023-07-10' }
      ],
      upcomingViewings: [
        { id: 1, property: 'Modern Waterfront Villa', date: '2023-07-20', time: '10:00 AM' },
        { id: 2, property: 'Downtown Luxury Apartment', date: '2023-07-22', time: '2:30 PM' }
      ]
    };
  }
};