// app/src/screens/Funcion/pdfFotoScreenView.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react'; // Apenas React, sem hooks de estado/efeito
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window'); // Removido 'height' pois não é usado na versão limpa

export default function PdfFotoScreenView() {
  // Removidas todas as lógicas, estados (useState, useEffect), e importações de funções.
  // Este componente é agora puramente para a estrutura visual.

  // Variáveis placeholder para a estrutura visual.
  // Em um componente real, estas seriam passadas via props para este componente de apresentação.
  const selectedImage = null; // Placeholder para a imagem selecionada
  const modalVisible = false; // Placeholder para o overlay de carregamento

  // Funções placeholder para os botões.
  // Em um componente real, essas seriam props passadas pelo componente pai.
  const handleSelectImageButtonPress = () => { console.log('Selecionar Imagem (placeholder)'); };
  const handleBack = () => { console.log('Voltar (placeholder)'); };
  const handleConvert = () => { console.log('Converter (placeholder)'); };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Box grande para a imagem */}
      <View style={styles.imageContainer}>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.placeholderText}>
            Selecione uma foto para converter em PDF
          </Text>
        )}
      </View>
      {/* Botão comprido azul para selecionar imagem */}
      <TouchableOpacity
        style={styles.selectButton}
        onPress={handleSelectImageButtonPress} // Chama a função placeholder
      >
        <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
      </TouchableOpacity>
      {/* Container para os botões Voltar e Converter */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity
          style={[styles.actionButton, styles.backButton]}
          onPress={handleBack} // Chama a função placeholder
        >
          <Text style={styles.actionButtonText}>Voltar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.convertButton, !selectedImage && styles.disabledButton]}
          onPress={handleConvert} // Chama a função placeholder
          disabled={!selectedImage} // Baseado em placeholder
        >
          <Text style={styles.actionButtonText}>Converter para PDF</Text>
        </TouchableOpacity>
      </View>
      {/* Opcional: Overlay de carregamento enquanto o seletor nativo está aberto */}
      {modalVisible && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Abrindo seletor de imagens...</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04070d',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#10141a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#6c7989',
    fontSize: 16,
    textAlign: 'center',
  },
  selectButton: {
    backgroundColor: '#3caae9',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: (width - 50) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2.84,
    elevation: 3,
  },
  backButton: {
    backgroundColor: '#2a3240',
  },
  convertButton: {
    backgroundColor: '#3caae9',
  },
  disabledButton: {
    backgroundColor: '#2a3240',
    opacity: 0.7,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  loadingText: {
    color: 'white',
    fontSize: 18,
  },
});