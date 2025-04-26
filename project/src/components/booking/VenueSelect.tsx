import React from 'react';
import { Venue } from '../../types';

interface VenueSelectProps {
  venues: Venue[];
  selectedVenue: Venue | null;
  onSelect: (venue: Venue) => void;
}

const VenueSelect: React.FC<VenueSelectProps> = ({ venues, selectedVenue, onSelect }) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6">Select a Venue</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300
              hover:shadow-lg transform hover:-translate-y-1
              ${selectedVenue?.id === venue.id ? 'ring-2 ring-purple-500 ring-offset-2' : ''}
            `}
            onClick={() => onSelect(venue)}
          >
            <div className="h-48 overflow-hidden">
              <img
                src={venue.image}
                alt={venue.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">{venue.name}</h4>
              <p className="text-gray-600 text-sm mb-4">{venue.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Up to {venue.capacity} guests</span>
                <span className="font-semibold text-purple-600">${venue.pricePerHour}/hour</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VenueSelect;