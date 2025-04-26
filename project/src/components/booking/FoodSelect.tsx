import React from 'react';
import { FoodOption } from '../../types';

interface FoodSelectProps {
  foodOptions: FoodOption[];
  selectedFoodOption: FoodOption | null;
  onSelect: (food: FoodOption) => void;
}

const FoodSelect: React.FC<FoodSelectProps> = ({ 
  foodOptions, 
  selectedFoodOption, 
  onSelect 
}) => {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-6">Select Food Option</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodOptions.map((food) => (
          <div
            key={food.id}
            className={`
              bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300
              hover:shadow-lg transform hover:-translate-y-1
              ${selectedFoodOption?.id === food.id ? 'ring-2 ring-purple-500 ring-offset-2' : ''}
            `}
            onClick={() => onSelect(food)}
          >
            <div className="h-40 overflow-hidden">
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-medium mb-2">{food.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{food.description}</p>
              <div className="text-right">
                <span className="font-semibold text-purple-600">${food.pricePerPerson}/person</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodSelect;