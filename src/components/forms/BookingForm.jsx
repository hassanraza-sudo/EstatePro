import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const BookingForm = ({ propertyId, propertyTitle }) => {
  const [booking, setBooking] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success('Booking request sent successfully!');
      setBooking({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        message: ''
      });
    }, 1500);
  };

  // Generate available time slots for the current date
  const getTimes = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      times.push(`${hour}:00`);
      if (hour < 17) times.push(`${hour}:30`);
    }
    return times;
  };

  // Get tomorrow's date as the minimum date for booking
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Schedule a Visit</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="label">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={booking.name}
              onChange={handleChange}
              required
              className="input pl-10"
              placeholder="John Doe"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="label">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={booking.email}
              onChange={handleChange}
              required
              className="input pl-10"
              placeholder="john@example.com"
            />
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="phone" className="label">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={booking.phone}
              onChange={handleChange}
              required
              className="input pl-10"
              placeholder="(123) 456-7890"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="date" className="label">
              Preferred Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Calendar className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                min={getTomorrowDate()}
                required
                className="input pl-10"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="time" className="label">
              Preferred Time
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Clock className="h-5 w-5 text-gray-400" />
              </div>
              <select
                id="time"
                name="time"
                value={booking.time}
                onChange={handleChange}
                required
                className="input pl-10"
              >
                <option value="">Select a time</option>
                {getTimes().map(time => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="message" className="label">
            Message (Optional)
          </label>
          <div className="relative">
            <div className="absolute top-3 left-3 pointer-events-none">
              <MessageCircle className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="message"
              name="message"
              value={booking.message}
              onChange={handleChange}
              rows="3"
              className="input pl-10"
              placeholder="Any specific questions or requirements?"
            ></textarea>
          </div>
        </div>
        
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full flex justify-center items-center"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </>
          ) : (
            'Schedule Visit'
          )}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;