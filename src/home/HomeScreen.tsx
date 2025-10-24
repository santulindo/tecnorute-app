import React from 'react';
import { FlatList, View } from 'react-native';
import { orders } from './../data/orders';
import RouteCard from './../components/RouteCard';

export default function HomeScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RouteCard
            route={item}
            onPress={() => navigation.navigate('OrderDetail', { order: item })}
          />
        )}
      />
    </View>
  );
}