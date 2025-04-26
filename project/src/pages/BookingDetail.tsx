import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import { Booking } from '../types';
import { getBookingsFromStorage, removeBooking } from '../data/mockData';
import { ArrowLeft, Clock, Calendar, Users, Utensils, MapPin, Palette, Trash2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const BookingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Fetch booking details
    if (id) {
      setIsLoading(true);
      try {
        const allBookings = getBookingsFromStorage();
        const foundBooking = allBookings.find(b => b.id === id);
        
        if (foundBooking) {
          setBooking(foundBooking);
        } else {
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error fetching booking:', error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [id, navigate, isAuthenticated]);
  
  const handleCancelBooking = () => {
    if (!booking) return;
    
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      removeBooking(booking.id);
      navigate('/dashboard');
    }
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center text-purple-600 hover:text-purple-800 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </button>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
          ) : booking ? (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-64 relative">
                <img 
                  src={booking.venue.image} 
                  alt={booking.venue.name}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-3xl font-bold">{booking.venue.name}</h1>
                  <p className="mt-2 text-lg opacity-90">
                    Event on {new Date(booking.date).toLocaleDateString(undefined, { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center">
                    <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="font-medium">
                        {new Date(booking.date).toLocaleDateString(undefined, { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="h-6 w-6 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="font-medium">{booking.startTime} - {booking.endTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Users className="h-6 w-6 text-purple-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Guests</p>
                      <p className="font-medium">{booking.guests} people</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Event Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start mb-4">
                        <MapPin className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Venue</p>
                          <p className="text-gray-600">{booking.venue.name}</p>
                          <p className="text-sm text-gray-500 mt-1">Capacity: Up to {booking.venue.capacity} guests</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start mb-4">
                        <Palette className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Decoration</p>
                          <p className="text-gray-600">{booking.decoration.name}</p>
                          <p className="text-sm text-gray-500 mt-1">{booking.decoration.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-start mb-4">
                        <Utensils className="h-5 w-5 text-purple-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Food</p>
                          <p className="text-gray-600">{booking.foodOption.name}</p>
                          <p className="text-sm text-gray-500 mt-1">{booking.foodOption.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="h-5 w-5 mr-3"></div>
                        <div>
                          <p className="font-medium">Booking Created</p>
                          <p className="text-gray-600">
                            {new Date(booking.createdAt).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <h2 className="text-xl font-semibold mb-4">Price Summary</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Venue</span>
                        <span>${booking.venue.pricePerHour}/hour</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Decoration</span>
                        <span>${booking.decoration.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Food</span>
                        <span>${booking.foodOption.pricePerPerson}/person</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold text-purple-700">
                        {formatCurrency(booking.totalPrice)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button 
                    variant="secondary"
                    className="flex items-center text-red-600 hover:text-red-700"
                    onClick={handleCancelBooking}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Cancel Booking
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-2">Booking not found</h3>
              <p className="text-gray-600 mb-6">The booking you're looking for doesn't exist or has been removed.</p>
              <button
                onClick={() => navigate('/dashboard')}
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Back to Dashboard
              </button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingDetail;