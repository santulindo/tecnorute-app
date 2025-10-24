import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Shipment } from '../types';
import { useShipments } from '../context/ShipmentContext';


export default function ShipmentItem({ item }: { item: Shipment }) {
const { removeShipment, updateQuantity } = useShipments();
return (
<View style={{ padding: 12, backgroundColor: '#fff', marginVertical: 6, borderRadius: 8 }}>
<Text style={{ fontWeight: '700' }}>{item.description}</Text>
<Text>Weight: {item.weightKg} kg • Qty: {item.quantity}</Text>
<View style={{ flexDirection: 'row', gap: 8, marginTop: 8 }}>
<TouchableOpacity onPress={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>
<Text>-</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => updateQuantity(item.id, item.quantity + 1)}>
<Text>+</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => removeShipment(item.id)}>
<Text style={{ color: 'red' }}>Remove</Text>
</TouchableOpacity>
</View>
</View>
);
}