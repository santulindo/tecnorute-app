import React, { createContext, useContext, useState } from 'react';
import { Shipment } from '../types';


type ShipmentItem = Shipment & { totalPrice?: number };


type ShipmentContextType = {
shipments: ShipmentItem[];
addShipment: (s: Shipment) => void;
removeShipment: (id: string) => void;
updateQuantity: (id: string, q: number) => void;
clearShipments: () => void;
subtotal: number;
};


const ShipmentContext = createContext<ShipmentContextType | undefined>(undefined);


export const ShipmentProvider = ({ children }: { children: React.ReactNode }) => {
const [shipments, setShipments] = useState<ShipmentItem[]>([]);


const addShipment = (s: Shipment) => {
setShipments(prev => {
const exists = prev.find(p => p.id === s.id);
if (exists) return prev.map(p => p.id === s.id ? { ...p, quantity: p.quantity + s.quantity } : p);
return [...prev, { ...s }];
});
};


const removeShipment = (id: string) => setShipments(prev => prev.filter(p => p.id !== id));


const updateQuantity = (id: string, q: number) => {
setShipments(prev => prev.map(p => p.id === id ? { ...p, quantity: q } : p));
};


const clearShipments = () => setShipments([]);


// For demo: subtotal = sum(weightKg * quantity * factor) -> simulated price
const subtotal = shipments.reduce((sum, s) => sum + (s.weightKg * s.quantity * 1000), 0);


return (
<ShipmentContext.Provider value={{ shipments, addShipment, removeShipment, updateQuantity, clearShipments, subtotal }}>
{children}
</ShipmentContext.Provider>
);
};


export const useShipments = () => {
const ctx = useContext(ShipmentContext);
if (!ctx) throw new Error('useShipments must be used within ShipmentProvider');
return ctx;
};