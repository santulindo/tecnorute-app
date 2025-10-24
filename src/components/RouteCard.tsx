import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Route } from '../types';
import { useNavigation } from '@react-navigation/native';


export default function RouteCard({ route }: { route: Route }) {
const navigation = useNavigation();
return (
<TouchableOpacity onPress={() => navigation.navigate('RouteDetail' as any, { id: route.id })} className="bg-white m-2 p-3 rounded-xl shadow">
<Image source={{ uri: route.image }} style={{ height: 140, borderRadius: 12, width: '100%' }} />
<Text style={{ fontWeight: '700', marginTop: 8 }}>{route.title}</Text>
<Text style={{ color: '#6b7280' }}>{route.origin} → {route.destination}</Text>
<Text style={{ marginTop: 6 }}>${(route.price).toLocaleString()}</Text>
</TouchableOpacity>
);
}