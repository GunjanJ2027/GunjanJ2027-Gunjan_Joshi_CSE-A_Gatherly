import React from 'react';
import { Decoration } from '../../types';

interface DecorationSelectProps {
  decorations: Decoration[];
  selectedDecoration: Decoration | null;
  onSelect: (decoration: Decoration) => void;
}

const DecorationSelect: React.FC<DecorationSelectProps> = ({ 
  decorations, 
  selectedDecoration, 
  onSelect 
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6">Select Decoration</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {decorations.map((decoration) => (
          <div
            key={decoration.id}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300
              hover:shadow-lg transform hover:-translate-y-1
              ${selectedDecoration?.id === decoration.id ? 'ring-2 ring-purple-500 ring-offset-2' : ''}
            `}
            onClick={() => onSelect(decoration)}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={decoration.image}
                alt={decoration.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">{decoration.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{decoration.description}</p>
              <div className="text-right">
                <span className="font-semibold text-purple-600">${decoration.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DecorationSelect;