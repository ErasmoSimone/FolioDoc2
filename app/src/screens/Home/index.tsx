// src/screens/Home/index.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Sempre exporte o componente como default para uso em navegação
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FolioDoc</Text>
      <Text style={styles.subtitle}>Seu conversor de documentos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});

// Adicione este export default
export default HomeScreen;