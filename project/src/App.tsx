import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './layouts/ProtectedRoute';

// Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import BookEvent from './pages/BookEvent';
import BookingDetail from './pages/BookingDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Redirect root to book event page */}
          <Route path="/" element={<Navigate to="/book" replace />} />
          
          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/book" element={<BookEvent />} />
            <Route path="/booking/:id" element={<BookingDetail />} />
          </Route>
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/book" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;