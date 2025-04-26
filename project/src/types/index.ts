// // Event and booking related types
// export interface Venue {
//   id: string;
//   name: string;
//   capacity: number;
//   pricePerHour: number;
//   image: string;
//   description: string;
// }

// export interface Decoration {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

// export interface FoodOption {
//   id: string;
//   name: string;
//   pricePerPerson: number;
//   image: string;
//   description: string;
// }

// export interface EventType {
//   id: string;
//   name: string;
//   description: string;
//   image: string;
// }

// export interface Booking {
//   id: string;
//   userId: string;
//   eventType: EventType;
//   venue: Venue;
//   date: string;
//   startTime: string;
//   endTime: string;
//   guests: number;
//   decoration: Decoration;
//   foodOption: FoodOption;
//   totalPrice: number;
//   createdAt: string;
// }

// // User related types
// export interface User {
//   id: string;
//   name: string;
//   email: string;
//   isAdmin?: boolean;
// }

// // Auth related types
// export interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoading: boolean;
//   error: string | null;
// }

// Event and booking related types
export interface Venue {
  id: string;
  name: string;
  capacity: number;
  pricePerHour: number;
  image: string;
  description: string;
}

export interface Decoration {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface FoodOption {
  id: string;
  name: string;
  pricePerPerson: number;
  image: string;
  description: string;
}

export interface EventType {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Booking {
  id: string;
  userId: string;
  userEmail: string;
  eventType: EventType;
  venue: Venue;
  date: string;
  startTime: string;
  endTime: string;
  guests: number;
  decoration: Decoration;
  foodOption: FoodOption;
  totalPrice: number;
  createdAt: string;
}

// User related types
export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin?: boolean;
}

// Auth related types
export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
