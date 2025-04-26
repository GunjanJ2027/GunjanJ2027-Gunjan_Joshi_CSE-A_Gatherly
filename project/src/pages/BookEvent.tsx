import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Button from '../components/common/Button';
import EventTypeSelect from '../components/booking/EventTypeSelect';
import VenueSelect from '../components/booking/VenueSelect';
import DecorationSelect from '../components/booking/DecorationSelect';
import FoodSelect from '../components/booking/FoodSelect';
import EventDetailsForm from '../components/booking/EventDetailsForm';
import PriceSummary from '../components/booking/PriceSummary';
import { Venue, Decoration, FoodOption, EventType } from '../types';
import { venues, decorations, foodOptions, eventTypes, addBooking } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';

const BookEvent: React.FC = () => {
  // Event details state
  const [selectedEventType, setSelectedEventType] = useState<EventType | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [selectedDecoration, setSelectedDecoration] = useState<Decoration | null>(null);
  const [selectedFoodOption, setSelectedFoodOption] = useState<FoodOption | null>(null);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [guests, setGuests] = useState(50);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  
  const calculateTotalPrice = () => {
    let total = 0;
    
    // Venue cost
    if (selectedVenue && startTime && endTime) {
      const start = new Date(`2000-01-01T${startTime}`);
      const end = new Date(`2000-01-01T${endTime}`);
      
      let diff = end.getTime() - start.getTime();
      if (diff < 0) {
        diff += 24 * 60 * 60 * 1000; // Add a day in milliseconds
      }
      
      const hours = diff / (1000 * 60 * 60);
      total += selectedVenue.pricePerHour * hours;
    }
    
    // Decoration cost
    if (selectedDecoration) {
      total += selectedDecoration.price;
    }
    
    // Food cost
    if (selectedFoodOption) {
      total += selectedFoodOption.pricePerPerson * guests;
    }
    
    return Math.round(total);
  };
  
  const handleSubmit = () => {
    if (!isAuthenticated || !user) {
      navigate('/login');
      return;
    }
    
    if (!selectedEventType || !selectedVenue || !selectedDecoration || !selectedFoodOption || !date || !startTime || !endTime) {
      alert('Please complete all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create a new booking
      // const newBooking = {
      //   id: uuidv4(),
      //   userId: user.id,
      //   eventType: selectedEventType,
      //   venue: selectedVenue,
      //   date,
      //   startTime,
      //   endTime,
      //   guests,
      //   decoration: selectedDecoration,
      //   foodOption: selectedFoodOption,
      //   totalPrice: calculateTotalPrice(),
      //   createdAt: new Date().toISOString(),
      // };

      const newBooking = {
  id: uuidv4(),
  userId: user.id,
  userEmail: user.email, // Add this line
  eventType: selectedEventType,
  venue: selectedVenue,
  date,
  startTime,
  endTime,
  guests,
  decoration: selectedDecoration,
  foodOption: selectedFoodOption,
  totalPrice: calculateTotalPrice(),
  createdAt: new Date().toISOString(),
};

      // Add booking to storage
      addBooking(newBooking);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating booking:', error);
      alert('An error occurred while creating your booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Book Your Event</h1>
            <p className="mt-2 text-gray-600">
              Customize every aspect of your event to create the perfect experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-10">
              {/* Event Type Selection */}
              <EventTypeSelect
                eventTypes={eventTypes}
                selectedEventType={selectedEventType}
                onSelect={setSelectedEventType}
              />
              
              {/* Venue Selection */}
              <VenueSelect 
                venues={venues} 
                selectedVenue={selectedVenue} 
                onSelect={setSelectedVenue} 
              />
              
              {/* Event Details */}
              <EventDetailsForm 
                date={date}
                setDate={setDate}
                startTime={startTime}
                setStartTime={setStartTime}
                endTime={endTime}
                setEndTime={setEndTime}
                guests={guests}
                setGuests={setGuests}
              />
              
              {/* Decoration Selection */}
              <DecorationSelect 
                decorations={decorations} 
                selectedDecoration={selectedDecoration} 
                onSelect={setSelectedDecoration} 
              />
              
              {/* Food Selection */}
              <FoodSelect 
                foodOptions={foodOptions} 
                selectedFoodOption={selectedFoodOption} 
                onSelect={setSelectedFoodOption} 
              />
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Price Summary */}
                <PriceSummary 
                  venue={selectedVenue}
                  decoration={selectedDecoration}
                  foodOption={selectedFoodOption}
                  startTime={startTime}
                  endTime={endTime}
                  guests={guests}
                />
                
                <div className="mt-6">
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!selectedEventType || !selectedVenue || !selectedDecoration || !selectedFoodOption || !date || !startTime || !endTime}
                    isLoading={isSubmitting}
                    fullWidth
                    size="lg"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookEvent;