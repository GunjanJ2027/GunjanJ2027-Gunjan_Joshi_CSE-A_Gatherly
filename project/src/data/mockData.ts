import { Venue, Decoration, FoodOption, Booking, User, EventType } from '../types';

// Mock Users
export const users: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
  },
];

// Mock Event Types
export const eventTypes: EventType[] = [
  {
    id: '1',
    name: 'Wedding',
    description: 'Celebrate your special day with elegance and style',
    image: 'https://vedicfeed.com/wp-content/uploads/2023/06/hindu-wedding-.webp',
  },
  {
    id: '2',
    name: 'Corporate Event',
    description: 'Professional settings for meetings, conferences, and team building',
    image: 'https://images.wanderon.in/blogs/new/2024/05/top-corporate-party-venues-in-gurgaon.jpeg',
  },
  {
    id: '3',
    name: 'Birthday Party',
    description: 'Make your birthday celebration unforgettable',
    image: 'https://images.pexels.com/photos/2291347/pexels-photo-2291347.jpeg',
  },
  {
    id: '4',
    name: 'Engagement',
    description: 'Begin your journey to marriage with a beautiful celebration',
    image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg',
  },
  {
    id: '5',
    name: 'Anniversary',
    description: 'Commemorate your special milestone with loved ones',
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg',
  },
  {
    id: '6',
    name: 'Graduation',
    description: 'Celebrate academic achievements in style',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
  },
];

// Mock Venues
export const venues: Venue[] = [
  {
    id: '1',
    name: 'Grand Ballroom',
    capacity: 500,
    pricePerHour: 5,
    image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg',
    description: 'Elegant ballroom with crystal chandeliers and marble floors, perfect for weddings and galas.',
  },
  {
    id: '2',
    name: 'Garden Terrace',
    capacity: 200,
    pricePerHour: 7,
    image: 'https://marksmendaily.com/wp-content/uploads/2023/10/terrace-garden-ideas-1000x600.jpg',
    description: 'Beautiful outdoor terrace with lush gardens, ideal for spring and summer events.',
  },
  {
    id: '3',
    name: 'Conference Hall',
    capacity: 300,
    pricePerHour: 6,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
    description: 'Modern conference hall with state-of-the-art AV equipment, perfect for corporate events.',
  },
  {
    id: '4',
    name: 'Rooftop Lounge',
    capacity: 150,
    pricePerHour: 8,
    image: 'https://images.pexels.com/photos/2403017/pexels-photo-2403017.jpeg',
    description: 'Stylish rooftop venue with panoramic city views, great for cocktail parties and receptions.',
  },
];

// Mock Decorations
export const decorations: Decoration[] = [
  {
    id: '1',
    name: 'Classic Elegance',
    price: 30,
    image: 'https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg',
    description: 'Timeless décor with white florals, candles, and elegant drapery.',
  },
  {
    id: '2',
    name: 'Modern Minimalist',
    price: 20,
    image: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg',
    description: 'Clean lines, geometric shapes, and a monochromatic color palette.',
  },
  {
    id: '3',
    name: 'Rustic Charm',
    price: 25,
    image: 'https://images.pexels.com/photos/1128783/pexels-photo-1128783.jpeg',
    description: 'Wooden elements, mason jars, and wildflowers for a countryside feel.',
  },
  {
    id: '4',
    name: 'Luxury Glam',
    price: 40,
    image: 'https://images.pexels.com/photos/7061660/pexels-photo-7061660.jpeg',
    description: 'Opulent décor with gold accents, crystals, and lavish floral arrangements.',
  },
];

// Mock Food Options
export const foodOptions: FoodOption[] = [
  {
    id: '1',
    name: 'Premium Buffet',
    pricePerPerson: 5,
    image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg',
    description: 'Extensive selection of gourmet dishes with live cooking stations.',
  },
  {
    id: '2',
    name: 'Plated Three-Course',
    pricePerPerson: 10,
    image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg',
    description: 'Elegant three-course meal with appetizer, main course, and dessert.',
  },
  {
    id: '3',
    name: 'Cocktail Reception',
    pricePerPerson: 5,
    image: 'https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg',
    description: 'Selection of canapés and hors d\'oeuvres with premium beverage package.',
  },
  {
    id: '4',
    name: 'International Cuisine',
    pricePerPerson: 8,
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg',
    description: 'Global flavors from multiple cuisines with themed food stations.',
  },
];

// Mock Bookings
export const bookings: Booking[] = [
  {
    id: '1',
    userId: '1',
    eventType: eventTypes[0], // Wedding
    venue: venues[0],
    date: '2025-04-15',
    startTime: '18:00',
    endTime: '23:00',
    guests: 200,
    decoration: decorations[0],
    foodOption: foodOptions[1],
    totalPrice: 450,
    createdAt: '2024-01-15T09:30:00Z',
  },
  {
    id: '2',
    userId: '1',
    eventType: eventTypes[2], // Birthday Party
    venue: venues[1],
    date: '2025-05-20',
    startTime: '12:00',
    endTime: '16:00',
    guests: 100,
    decoration: decorations[2],
    foodOption: foodOptions[0],
    totalPrice: 18000,
    createdAt: '2024-02-10T14:45:00Z',
  },
];

// Local storage utilities for mock data persistence
export const saveBookingsToStorage = (updatedBookings: Booking[]) => {
  localStorage.setItem('gatherly-bookings', JSON.stringify(updatedBookings));
};

export const getBookingsFromStorage = (): Booking[] => {
  const storedBookings = localStorage.getItem('gatherly-bookings');
  if (storedBookings) {
    return JSON.parse(storedBookings);
  }
  saveBookingsToStorage(bookings);
  return bookings;
};

export const getUserBookings = (userId: string): Booking[] => {
  const allBookings = getBookingsFromStorage();
  return allBookings.filter(booking => booking.userId === userId);
};

export const addBooking = (newBooking: Booking): void => {
  const allBookings = getBookingsFromStorage();
  saveBookingsToStorage([...allBookings, newBooking]);
};

export const removeBooking = (bookingId: string): void => {
  const allBookings = getBookingsFromStorage();
  const updatedBookings = allBookings.filter(booking => booking.id !== bookingId);
  saveBookingsToStorage(updatedBookings);
};