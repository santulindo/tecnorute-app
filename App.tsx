import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import { LogisticaProvider } from './src/context/LogisticaContext';

export default function App() {
  return (
    <LogisticaProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </LogisticaProvider>
  );
}
const colors = {
  primary: '#2563eb', // Azul transporte
  secondary: '#10b981', // Verde logístico
  warning: '#f59e0b',
  dark: '#1f2937',
  light: '#f3f4f6',
  white: '#ffffff',
};
export { colors };