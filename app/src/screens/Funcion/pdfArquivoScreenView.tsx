// app/src/screens/Funcion/pdfArquivoScreenView.tsx
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function PdfArquivoScreenView() {
  // Removidas todas as lógicas, estados, useEffect e importações de funções.
  // Este componente é agora puramente para a estrutura visual.

  // Variáveis placeholder para a estrutura visual.
  // selectedDocument agora é um objeto de placeholder para evitar erros de tipagem.
  const selectedDocument = {
    name: 'Nome do Documento de Exemplo.pdf', // Valor de placeholder
    mimeType: 'application/pdf', // Valor de placeholder
    uri: 'file://placeholder/doc.pdf', // URI de placeholder
  };
  const modalVisible = false; // Controla a visibilidade visual do overlay de carregamento.

  // Funções placeholder para os botões.
  const pickDocument = () => { console.log('Função de Selecionar Documento (placeholder)'); };
  const handleBack = () => { console.log('Função de Voltar (placeholder)'); };
  const handleConvert = () => { console.log('Função de Converter (placeholder)'); };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {/* Box grande para o documento */}
      <View style={styles.documentContainer}>
        {/* A condição selectedDocument ? (...) : (...) agora sempre renderizará a parte do documento,
            pois selectedDocument não é mais null. */}
        <View style={styles.documentInfo}>
          <Ionicons name="document-text" size={64} color="#3caae9" />
          <Text style={styles.documentName} numberOfLines={2} ellipsizeMode="middle">
            {selectedDocument.name}
          </Text>
          <Text style={styles.documentType}>
            {selectedDocument.mimeType || 'Documento'}
          </Text>
        </View>
        {/* O texto de placeholder original pode ser removido ou movido para outro lugar,
            já que selectedDocument nunca será null para esta renderização. */}
        {/* <Text style={styles.placeholderText}>
              Selecione um documento para converter em PDF
            </Text> */}
      </View>
      {/* Botão comprido azul para selecionar documento */}
      <TouchableOpacity
        style={styles.selectButton}
        onPress={pickDocument} // Chama a função placeholder
      >
        <Text style={styles.selectButtonText}>Selecionar Documento</Text>
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
          style={[styles.actionButton, styles.convertButton, styles.disabledButton]} // Sempre desabilitado para fins visuais puros
          onPress={handleConvert} // Chama a função placeholder
          disabled={true} // Sempre desabilitado para fins visuais puros
        >
          <Text style={styles.actionButtonText}>Converter</Text>
        </TouchableOpacity>
      </View>

      {/* Opcional: Overlay de carregamento enquanto o seletor nativo está aberto */}
      {modalVisible && (
        <View style={styles.loadingOverlay}>
          <Text style={styles.loadingText}>Abrindo seletor de documentos...</Text>
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
  documentContainer: {
    flex: 1,
    backgroundColor: '#10141a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
  },
  documentInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  documentName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
    textAlign: 'center',
    maxWidth: '90%',
  },
  documentType: {
    color: '#6c7989',
    fontSize: 14,
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