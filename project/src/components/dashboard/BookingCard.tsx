// import React from 'react';
// import { CalendarIcon, Clock, Users, Trash2 } from 'lucide-react';
// import { Booking } from '../../types';
// import Button from '../common/Button';
// import { Link } from 'react-router-dom';

// interface BookingCardProps {
//   booking: Booking;
//   onRemove: (id: string) => void;
// }

// const BookingCard: React.FC<BookingCardProps> = ({ booking, onRemove }) => {
//   // Format date
//   const formatDate = (dateString: string) => {
//     const options: Intl.DateTimeFormatOptions = { 
//       year: 'numeric', 
//       month: 'long', 
//       day: 'numeric' 
//     };
//     return new Date(dateString).toLocaleDateString(undefined, options);
//   };
  
//   // Format currency
//   const formatCurrency = (amount: number) => {
//     return new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format(amount);
//   };
  
//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       <div className="h-48 relative overflow-hidden">
//         <img 
//           src={booking.venue?.image} 
//           alt={booking.venue?.name}
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
//         <div className="absolute bottom-4 left-4 text-white">
//           <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full mb-2 inline-block">
//             {booking.eventType?.name}
//           </span>
//           <h3 className="text-xl font-bold">{booking.venue?.name}</h3>
//         </div>
//       </div>
      
//       <div className="p-6">
//         <div className="flex flex-col gap-3 mb-4">
//           <div className="flex items-center text-gray-600">
//             <CalendarIcon className="h-5 w-5 mr-2 text-purple-500" />
//             <span>{formatDate(booking.date)}</span>
//           </div>
          
//           <div className="flex items-center text-gray-600">
//             <Clock className="h-5 w-5 mr-2 text-purple-500" />
//             <span>{booking.startTime} - {booking.endTime}</span>
//           </div>
          
//           <div className="flex items-center text-gray-600">
//             <Users className="h-5 w-5 mr-2 text-purple-500" />
//             <span>{booking.guests} Guests</span>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200 pt-4 mb-4">
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-600">Venue:</span>
//             <span className="font-medium">{booking.venue?.name}</span>
//           </div>
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-600">Decoration:</span>
//             <span className="font-medium">{booking.decoration?.name}</span>
//           </div>
//           <div className="flex items-center justify-between mb-2">
//             <span className="text-gray-600">Food:</span>
//             <span className="font-medium">{booking.foodOption?.name}</span>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-200 pt-4 mb-4">
//           <div className="flex items-center justify-between">
//             <span className="text-lg font-semibold">Total Price:</span>
//             <span className="text-lg font-bold text-purple-700">{formatCurrency(booking.totalPrice)}</span>
//           </div>
//         </div>
        
//         <div className="flex space-x-4">
//           <Link to={`/booking/${booking.id}`} className="flex-1">
//             <Button variant="outline" fullWidth>
//               View Details
//             </Button>
//           </Link>
//           <Button 
//             variant="secondary" 
//             onClick={() => onRemove(booking.id)}
//             className="flex items-center justify-center"
//           >
//             <Trash2 className="h-5 w-5 text-red-500" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingCard;


import React from 'react';
import { CalendarIcon, Clock, Users, Trash2, Mail } from 'lucide-react';
import { Booking } from '../../types';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

interface BookingCardProps {
  booking: Booking;
  onRemove: (id: string) => void;
}

const BookingCard: React.FC<BookingCardProps> = ({ booking, onRemove }) => {
  // Format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 relative overflow-hidden">
        <img 
          src={booking.venue?.image} 
          alt={booking.venue?.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <span className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full mb-2 inline-block">
            {booking.eventType?.name}
          </span>
          <h3 className="text-xl font-bold">{booking.venue?.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex items-center text-gray-600">
            <CalendarIcon className="h-5 w-5 mr-2 text-purple-500" />
            <span>{formatDate(booking.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2 text-purple-500" />
            <span>{booking.startTime} - {booking.endTime}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Users className="h-5 w-5 mr-2 text-purple-500" />
            <span>{booking.guests} Guests</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-2 text-purple-500" />
            <span>Booked by: {booking.userEmail}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Venue:</span>
            <span className="font-medium">{booking.venue?.name}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Decoration:</span>
            <span className="font-medium">{booking.decoration?.name}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Food:</span>
            <span className="font-medium">{booking.foodOption?.name}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total Price:</span>
            <span className="text-lg font-bold text-purple-700">{formatCurrency(booking.totalPrice)}</span>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <Link to={`/booking/${booking.id}`} className="flex-1">
            <Button variant="outline" fullWidth>
              View Details
            </Button>
          </Link>
          <Button 
            variant="secondary" 
            onClick={() => onRemove(booking.id)}
            className="flex items-center justify-center"
          >
            <Trash2 className="h-5 w-5 text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
