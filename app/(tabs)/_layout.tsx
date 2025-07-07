// app/(tabs)/_layout.tsx
import { Stack } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false, // Esconde o cabeçalho padrão
    }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
