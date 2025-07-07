// src/navigation/RootNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ConverterScreen from '../screens/Converter';

export type RootStackParamList = {
  Converter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Converter" component={ConverterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
