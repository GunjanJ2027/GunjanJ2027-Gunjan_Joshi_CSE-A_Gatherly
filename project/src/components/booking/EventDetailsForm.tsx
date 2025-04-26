import React from 'react';

interface EventDetailsFormProps {
  date: string;
  setDate: (date: string) => void;
  startTime: string;
  setStartTime: (time: string) => void;
  endTime: string;
  setEndTime: (time: string) => void;
  guests: number;
  setGuests: (guests: number) => void;
}

const EventDetailsForm: React.FC<EventDetailsFormProps> = ({
  date,
  setDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  guests,
  setGuests,
}) => {
  // Calculate min date (tomorrow)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };
  
  // Handle time validation
  const handleEndTimeChange = (newEndTime: string) => {
    if (startTime && newEndTime <= startTime) {
      alert('End time must be after start time');
      return;
    }
    setEndTime(newEndTime);
  };
  
  const handleStartTimeChange = (newStartTime: string) => {
    setStartTime(newStartTime);
    if (endTime && endTime <= newStartTime) {
      setEndTime('');
    }
  };
  
  return (
    <div className="mb-10 bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Event Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
            Event Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            min={getTomorrowDate()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="10"
            max="1000"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700 mb-1">
            Start Time
          </label>
          <input
            type="time"
            id="startTime"
            name="startTime"
            value={startTime}
            onChange={(e) => handleStartTimeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700 mb-1">
            End Time
          </label>
          <input
            type="time"
            id="endTime"
            name="endTime"
            value={endTime}
            onChange={(e) => handleEndTimeChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default EventDetailsForm;