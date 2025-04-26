import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState } from '../types';

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface StoredUser extends User {
  password: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const storedUser = localStorage.getItem('gatherly-user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setAuthState({
          user: parsedUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        localStorage.removeItem('gatherly-user');
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      }
    } else {
      setAuthState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Check for admin credentials
      if (email === 'gatherly@gmail.com' && password === 'admin') {
        const adminUser: User = {
          id: 'admin',
          name: 'Admin',
          email: 'gatherly@gmail.com',
          isAdmin: true
        };
        
        localStorage.setItem('gatherly-user', JSON.stringify(adminUser));
        
        setAuthState({
          user: adminUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        });
        return;
      }
      
      const storedUsers = localStorage.getItem('gatherly-users');
      const existingUsers: StoredUser[] = storedUsers ? JSON.parse(storedUsers) : [];
      
      const user = existingUsers.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error('Invalid email or password');
      }
      
      // Remove password before storing in session
      const { password: _, ...userWithoutPassword } = user;
      
      localStorage.setItem('gatherly-user', JSON.stringify(userWithoutPassword));
      
      setAuthState({
        user: userWithoutPassword,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Prevent signup with admin email
      if (email === 'gatherly@gmail.com') {
        throw new Error('This email is reserved. Please use a different email.');
      }
      
      const storedUsers = localStorage.getItem('gatherly-users');
      const existingUsers: StoredUser[] = storedUsers ? JSON.parse(storedUsers) : [];
      
      if (existingUsers.some(u => u.email === email)) {
        throw new Error('Email is already registered. Please use a different email or login.');
      }
      
      const newUser: StoredUser = {
        id: Math.max(...existingUsers.map(u => parseInt(u.id)), 0) + 1 + '',
        name,
        email,
        password,
      };
      
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('gatherly-users', JSON.stringify(updatedUsers));
      
      // Remove password before storing in session
      const { password: _, ...userWithoutPassword } = newUser;
      
      localStorage.setItem('gatherly-user', JSON.stringify(userWithoutPassword));
      
      setAuthState({
        user: userWithoutPassword,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      }));
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('gatherly-user');
    setAuthState({
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
    });
  };

  const contextValue: AuthContextType = {
    ...authState,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};