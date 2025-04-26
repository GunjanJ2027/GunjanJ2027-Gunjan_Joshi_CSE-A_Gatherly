import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import BookingCard from '../components/dashboard/BookingCard';
import { Booking } from '../types';
import { getBookingsFromStorage, removeBooking } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    
    // Fetch bookings
    const fetchBookings = () => {
      setIsLoading(true);
      try {
        const allBookings = getBookingsFromStorage();
        // If admin, show all bookings, otherwise filter by user
        const filteredBookings = user?.isAdmin 
          ? allBookings 
          : allBookings.filter(booking => booking.userId === user?.id);
        setBookings(filteredBookings);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchBookings();
  }, [isAuthenticated, user, navigate]);
  
  const handleRemoveBooking = (bookingId: string) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      removeBooking(bookingId);
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">
              {user?.isAdmin ? 'All Bookings' : 'My Bookings'}
            </h1>
            <p className="mt-2 text-gray-600">
              {user?.isAdmin 
                ? 'Manage all event bookings across the platform' 
                : 'Manage your upcoming events and bookings'}
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-600"></div>
            </div>
          ) : bookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bookings.map(booking => (
                <BookingCard 
                  key={booking.id} 
                  booking={booking} 
                  onRemove={handleRemoveBooking} 
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl font-medium text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600 mb-6">
                {user?.isAdmin 
                  ? 'There are no bookings in the system yet.'
                  : "You haven't made any event bookings yet."}
              </p>
              {!user?.isAdmin && (
                <button
                  onClick={() => navigate('/book')}
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                >
                  Book Your First Event
                </button>
              )}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;