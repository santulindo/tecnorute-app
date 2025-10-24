import React, { createContext, useState, useContext } from 'react';
import { Order } from '../types';

type ContextType = {
  orders: Order[];
  markDelivered: (id: string) => void;
  assignDriver: (id: string, driver: string) => void;
};

const LogisticaContext = createContext<ContextType | undefined>(undefined);

export const LogisticaProvider = ({ children }: { children: React.ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const markDelivered = (id: string) => {
    setOrders(prev => prev.map(o => (o.id === id ? { ...o, status: 'Delivered' } : o)));
  };

  const assignDriver = (id: string, driver: string) => {
    setOrders(prev => prev.map(o => (o.id === id ? { ...o, driver } : o)));
  };

  return (
    <LogisticaContext.Provider value={{ orders, markDelivered, assignDriver }}>
      {children}
    </LogisticaContext.Provider>
  );
};

export const useLogistica = () => {
  const context = useContext(LogisticaContext);
  if (!context) throw new Error('useLogistica must be used inside LogisticaProvider');
  return context;
};