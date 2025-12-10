// contexts/AuthContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Vérifier l'authentification au chargement
    const token = localStorage.getItem('adminToken');
    const userData = localStorage.getItem('adminUser');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
    
    setIsLoading(false);
  }, []);

  const login = async (email, password) => {
    // Pour la démo, vérification simple
    if (email === 'admin@confectionpro.com' && password === 'admin123') {
      const userData = {
        id: 1,
        email: email,
        name: 'Administrateur',
        role: 'admin',
        avatar: 'A'
      };
      
      localStorage.setItem('adminToken', 'demo-token-123');
      localStorage.setItem('adminUser', JSON.stringify(userData));
      setUser(userData);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    setUser(null);
    router.push('/admin/login');
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}