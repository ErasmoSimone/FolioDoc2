// app/src/screens/Funcion/pdfArquivosDobloScreenView.tsx
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import React from 'react'; // Apenas React, sem hooks de estado/efeito
import {
  ActivityIndicator, // Mantido apenas para demonstrar o estilo, sem uso funcional
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

const { width } = Dimensions.get('window');
const BOXES_COUNT = 10;
const A4_RATIO = 1.414;

// Removida a interface SelectedPdfDetails e todos os estados e referências
// Interface SelectedPdfDetails não é mais necessária aqui

export default function PdfArquivosDobloScreenView() {
  // Removidos todos os estados (useState), referências (useRef) e efeitos (useEffect).
  // Removidas todas as funções lógicas (pickDocument, removeDocument, handleBack, handleMerge, getPdfForBox, formatFileSize, renderLeftBoxes, renderRightBoxes).
  // Removidas as importações DocumentPicker e router, pois não há lógica.

  // Variáveis placeholder para a estrutura visual.
  // Em um componente real, estas seriam passadas via props para este componente de apresentação.
  const selectedPdfs: any[] = []; // Array vazio ou com dados de exemplo para visualização
  

  // Funções placeholder para os botões.
  // Em um componente real, essas seriam props passadas pelo componente pai.
  const handleSelectFile = (boxId: number) => { console.log(`Selecionar Arquivo para Box ${boxId} (placeholder)`); };
  const handleRemoveFile = (boxId: number) => { console.log(`Remover Arquivo da Box ${boxId} (placeholder)`); };
  const handleBack = () => { console.log('Voltar (placeholder)'); };
  const handleMerge = () => { console.log('Juntar PDFs (placeholder)'); };

  // Funções de renderização que agora usam apenas variáveis placeholder
  const renderLeftBoxes = () => {
    return Array(BOXES_COUNT).fill(0).map((_, index) => {
      const boxId = index + 1;
      // Simula um documento selecionado para visualização, se desejar.
      // Para um esqueleto puro, o valor é null, resultando em boxes vazias.
      const pdfDetails = null; // Apenas placeholder visual

      return (
        <View
          // remocao de ref: ref={el => { boxRefs.current[boxId - 1] = el; }}
          key={`left-${boxId}`}
          style={styles.leftBox}
        >
          {/* Lógica de carregamento e exibição de PDF removida, usando apenas placeholders */}
          {false && ( // Sempre falso para não exibir ActivityIndicator
            <View style={styles.loadingOverlay}>
              <ActivityIndicator size="large" color="#3caae9" />
              <Text style={styles.loadingText}>Carregando PDF...</Text>
            </View>
          )}
          {pdfDetails ? ( // Sempre falso para exibir box vazia
            <View style={styles.documentInfo}>
              <Ionicons name="document-text" size={60} color="#3caae9" />
              <Text style={styles.documentName} numberOfLines={2} ellipsizeMode="middle">
                Nome do Documento Placeholder
              </Text>
              <Text style={styles.documentSize}>
                Tamanho do Arquivo Placeholder
              </Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveFile(boxId)} // Chama função placeholder
              >
                <Ionicons name="close-circle" size={24} color="#ff4444" />
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyBox}>
              <Ionicons name="add-circle-outline" size={40} color="#6c7989" />
              <Text style={styles.boxNumber}>{boxId}</Text>
            </View>
          )}

          {/* Botão de seleção */}
          <TouchableOpacity
            style={styles.selectButton}
            onPress={() => handleSelectFile(boxId)} // Chama função placeholder
          >
            <Text style={styles.selectButtonText}>
              {pdfDetails ? 'Alterar Arquivo' : 'Selecionar Arquivo'}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };

  const renderRightBoxes = () => {
    return Array(BOXES_COUNT).fill(0).map((_, index) => {
      const boxId = index + 1;
      const pdfDetails = null; // Apenas placeholder visual

      return (
        <View key={`right-${boxId}`} style={styles.rightBox}>
          {pdfDetails ? ( // Sempre falso para exibir box vazia
            <View style={styles.miniDocumentInfo}>
              <Ionicons name="document-text" size={24} color="#3caae9" />
              <Text style={styles.miniDocumentName} numberOfLines={2} ellipsizeMode="middle">
                Nome do Documento Placeholder
              </Text>
              {false && ( // Sempre falso para não exibir ActivityIndicator
                <ActivityIndicator size="small" color="#3caae9" style={{ marginTop: 5 }} />
              )}
              {true && ( // Sempre verdadeiro para exibir tamanho placeholder
                <Text style={styles.miniDocumentSize}>
                  Tamanho Placeholder
                </Text>
              )}
            </View>
          ) : (
            <View style={styles.emptyMiniBox}>
              <Text style={styles.miniBoxNumber}>{boxId}</Text>
            </View>
          )}
        </View>
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.mainContent}>
        {/* Duas colunas lado a lado com scroll independente */}
        <View style={styles.columnsContainer}>
          {/* Coluna da esquerda (70%) */}
          <ScrollView
            style={styles.leftColumn}
            contentContainerStyle={styles.leftColumnContent}
            showsVerticalScrollIndicator={true}
          >
            {renderLeftBoxes()}
          </ScrollView>

          {/* Coluna da direita (30%) */}
          <ScrollView
            style={styles.rightColumn}
            contentContainerStyle={styles.rightColumnContent}
            showsVerticalScrollIndicator={true}
          >
            {renderRightBoxes()}
          </ScrollView>
        </View>
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
          style={[
            styles.actionButton,
            styles.convertButton,
            selectedPdfs.length === 0 && styles.disabledButton // Lógica de estilo ainda baseada em placeholder
          ]}
          onPress={handleMerge} // Chama a função placeholder
          disabled={selectedPdfs.length === 0} // Lógica de desabilitação ainda baseada em placeholder
        >
          <Text style={styles.actionButtonText}>
            Juntar ({selectedPdfs.length})
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#04070d',
    paddingBottom: 30,
  },
  mainContent: {
    flex: 1,
    paddingTop: 20,
  },
  columnsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  leftColumn: {
    width: width * 0.7,
    paddingRight: 5,
  },
  rightColumn: {
    width: width * 0.3,
    paddingLeft: 5,
  },
  leftColumnContent: {
    paddingBottom: 100,
  },
  rightColumnContent: {
    paddingBottom: 100,
  },
  leftBox: {
    backgroundColor: '#10141a',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    height: (width * 0.7 - 15) * A4_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBox: {
    backgroundColor: '#10141a',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
    height: (width * 0.3 - 10) * A4_RATIO,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  emptyMiniBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxNumber: {
    color: '#6c7989',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  miniBoxNumber: {
    color: '#6c7989',
    fontSize: 16,
    fontWeight: 'bold',
  },
  documentInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    position: 'relative',
  },
  miniDocumentInfo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  documentName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    textAlign: 'center',
    maxWidth: '90%',
  },
  documentSize: {
    color: '#6c7989',
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center',
  },
  miniDocumentName: {
    color: 'white',
    fontSize: 11,
    fontWeight: '600',
    marginTop: 5,
    textAlign: 'center',
    maxWidth: '90%',
  },
  miniDocumentSize: {
    color: '#6c7989',
    fontSize: 9,
    marginTop: 2,
    textAlign: 'center',
  },
  removeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
  selectButton: {
    backgroundColor: '#3caae9',
    padding: 12,
    alignItems: 'center',
    width: '100%',
  },
  selectButtonText: {
    color: 'white',
    fontWeight: '500',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#04070d',
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
    backgroundColor: 'rgba(16, 20, 26, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loadingText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});