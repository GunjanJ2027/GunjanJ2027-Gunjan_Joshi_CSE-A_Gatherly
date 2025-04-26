import React, { useMemo } from 'react';
import { Venue, Decoration, FoodOption } from '../../types';

interface PriceSummaryProps {
  venue: Venue | null;
  decoration: Decoration | null;
  foodOption: FoodOption | null;
  startTime: string;
  endTime: string;
  guests: number;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  venue,
  decoration,
  foodOption,
  startTime,
  endTime,
  guests,
}) => {
  // Calculate venue hours
  const venueHours = useMemo(() => {
    if (!startTime || !endTime) return 0;
    
    const start = new Date(`2000-01-01T${startTime}`);
    const end = new Date(`2000-01-01T${endTime}`);
    
    // If end time is before start time, assume it's the next day
    let diff = end.getTime() - start.getTime();
    if (diff < 0) {
      diff += 24 * 60 * 60 * 1000; // Add a day in milliseconds
    }
    
    return Math.round(diff / (1000 * 60 * 60) * 10) / 10; // Round to 1 decimal place
  }, [startTime, endTime]);
  
  // Calculate costs
  const venueCost = useMemo(() => {
    if (!venue || venueHours === 0) return 0;
    return venue.pricePerHour * venueHours;
  }, [venue, venueHours]);
  
  const decorationCost = useMemo(() => {
    if (!decoration) return 0;
    return decoration.price;
  }, [decoration]);
  
  const foodCost = useMemo(() => {
    if (!foodOption || guests === 0) return 0;
    return foodOption.pricePerPerson * guests;
  }, [foodOption, guests]);
  
  // Calculate total
  const totalCost = venueCost + decorationCost + foodCost;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-6">Price Summary</h3>
      
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Venue</p>
            {venue && (
              <p className="text-sm text-gray-500">
                {venue.name} ({venueHours} hours × ${venue.pricePerHour}/hour)
              </p>
            )}
          </div>
          <span className="font-medium">
            {venue ? formatCurrency(venueCost) : '-'}
          </span>
        </div>
        
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Decoration</p>
            {decoration && (
              <p className="text-sm text-gray-500">{decoration.name}</p>
            )}
          </div>
          <span className="font-medium">
            {decoration ? formatCurrency(decorationCost) : '-'}
          </span>
        </div>
        
        <div className="flex justify-between items-center pb-2 border-b border-gray-200">
          <div>
            <p className="text-gray-600">Food</p>
            {foodOption && (
              <p className="text-sm text-gray-500">
                {foodOption.name} ({guests} guests × ${foodOption.pricePerPerson}/person)
              </p>
            )}
          </div>
          <span className="font-medium">
            {foodOption ? formatCurrency(foodCost) : '-'}
          </span>
        </div>
      </div>
      
      <div className="flex justify-between items-center pt-2 border-t-2 border-purple-500">
        <p className="text-lg font-semibold">Total</p>
        <span className="text-xl font-bold text-purple-700">{formatCurrency(totalCost)}</span>
      </div>
    </div>
  );
};

export default PriceSummary;