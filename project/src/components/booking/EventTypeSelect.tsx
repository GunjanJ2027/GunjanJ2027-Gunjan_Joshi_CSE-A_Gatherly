import React from 'react';
import { EventType } from '../../types';

interface EventTypeSelectProps {
  eventTypes: EventType[];
  selectedEventType: EventType | null;
  onSelect: (eventType: EventType) => void;
}

const EventTypeSelect: React.FC<EventTypeSelectProps> = ({
  eventTypes,
  selectedEventType,
  onSelect,
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6">Select Event Type</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventTypes.map((eventType) => (
          <div
            key={eventType.id}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300
              hover:shadow-lg transform hover:-translate-y-1
              ${selectedEventType?.id === eventType.id ? 'ring-2 ring-purple-500 ring-offset-2' : ''}
            `}
            onClick={() => onSelect(eventType)}
          >
            <div className="h-48 relative overflow-hidden">
              <img
                src={eventType.image}
                alt={eventType.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-xl font-bold">{eventType.name}</h4>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600">{eventType.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventTypeSelect;