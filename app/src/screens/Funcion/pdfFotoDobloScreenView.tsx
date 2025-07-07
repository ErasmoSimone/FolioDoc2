// app/src/screens/Funcion/pdfFotoDobloScreenView.tsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PdfFotoDobloScreenView() {
  // Removidas todas as lógicas, estados (useState, useEffect), e importações de funções.
  // Este componente é agora puramente para a estrutura visual.

  // Variáveis placeholder para a estrutura visual.
  // Em um componente real, estas seriam passadas via props para este componente de apresentação.
  const image1 = null; // Placeholder para a primeira imagem
  const image2 = null; // Placeholder para a segunda imagem
  const previewImage = null; // Placeholder para a imagem de pré-visualização (PDF combinado)
  const modalVisible = false; // Placeholder para o overlay de carregamento

  // Funções placeholder para os botões.
  // Em um componente real, essas seriam props passadas pelo componente pai.
  const handleSelectImage1 = () => { console.log('Selecionar Imagem 1 (placeholder)'); };
  const handleSelectImage2 = () => { console.log('Selecionar Imagem 2 (placeholder)'); };
  const handleBack = () => { console.log('Voltar (placeholder)'); };
  const handleConvert = () => { console.log('Converter (placeholder)'); };

  // Verificação para desabilitar o botão, baseada em placeholders
  const hasSelectedImage = image1 !== null || image2 !== null;

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {/* Duas caixas lado a lado para seleção de imagens */}
        <View style={styles.imageSelectionRow}>
          {/* Primeira caixa de imagem */}
          <View style={styles.imageSelectionBox}>
            {image1 ? (
              <Image
                source={{ uri: image1 }}
                style={styles.thumbnailImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.emptyImageBox}>
                <Text style={styles.emptyImageText}>Imagem 1</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.selectImageButton}
              onPress={handleSelectImage1} // Chama a função placeholder
            >
              <Text style={styles.selectImageButtonText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
          {/* Segunda caixa de imagem */}
          <View style={styles.imageSelectionBox}>
            {image2 ? (
              <Image
                source={{ uri: image2 }}
                style={styles.thumbnailImage}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.emptyImageBox}>
                <Text style={styles.emptyImageText}>Imagem 2</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.selectImageButton}
              onPress={handleSelectImage2} // Chama a função placeholder
            >
              <Text style={styles.selectImageButtonText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Box grande para visualização da imagem editada (75% da altura da tela) */}
        <View style={styles.previewContainer}>
          {previewImage ? (
            <Image
              source={{ uri: previewImage }}
              style={styles.previewImage}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.placeholderText}>
              Selecione duas imagens para criar um PDF com 2 fotos por página
            </Text>
          )}
        </View>
        {/* Botões de ação na parte inferior */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity
            style={[styles.actionButton, styles.backButton]}
            onPress={handleBack} // Chama a função placeholder
          >
            <Text style={styles.actionButtonText}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.actionButton, styles.convertButton, !hasSelectedImage && styles.disabledButton]}
            onPress={handleConvert} // Chama a função placeholder
            disabled={!hasSelectedImage} // Baseado em placeholders
          >
            <Text style={styles.actionButtonText}>Converter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* Opcional: Overlay de carregamento enquanto o seletor nativo está aberto */}
      {modalVisible && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Abrindo seletor de imagens...</Text>
        </View>
      )}
      {/* REMOVIDO: Qualquer menção a ImageSelectionModal ou outros modais aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04070d',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 30,
  },
  imageSelectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  imageSelectionBox: {
    width: (width - 50) / 2, // Calcula a largura para ocupar metade do espaço disponível
    backgroundColor: '#10141a',
    borderRadius: 12,
    overflow: 'hidden',
  },
  thumbnailImage: {
    width: '100%',
    height: 120,
  },
  emptyImageBox: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImageText: {
    color: '#6c7989',
    fontSize: 16,
  },
  selectImageButton: {
    backgroundColor: '#3caae9',
    padding: 10,
    alignItems: 'center',
  },
  selectImageButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  previewContainer: {
    height: height * 0.75 * 0.75, // Ajustado para ser proporcional à altura da tela, mas menor que a anterior
    backgroundColor: '#10141a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  placeholderText: {
    color: '#6c7989',
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
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