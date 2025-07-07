// utils/imageConvertSalve.tsx
import * as FileSystem from 'expo-file-system';
import { manipulateAsync, SaveFormat } from 'expo-image-manipulator';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import React, { useState } from 'react';
import {
    Alert,
    Dimensions,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

interface ImageData {
  uri: string;
  type: string;
  fileName: string;
}

interface ConversionOption {
  format: string;
  saveFormat: SaveFormat;
}

// Função 1: Seletor de Imagem
export const imageSeletor = async (onImageSelected: (image: ImageData) => void) => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      const asset = result.assets[0];
      const imageData: ImageData = {
        uri: asset.uri,
        type: asset.type || 'image/jpeg',
        fileName: asset.fileName || `image.${asset.uri.split('.').pop()}`
      };
      onImageSelected(imageData);
    }
  } catch (error) {
    console.error('Erro ao selecionar imagem:', error);
    Alert.alert('Erro', 'Não foi possível selecionar imagem.');
  }
};

// Função 2: Conversor de Imagem
export const ImageConverter: React.FC<{
  imageData: ImageData;
  onConversionComplete: (convertedUri: string, format: string) => void;
}> = ({ imageData, onConversionComplete }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [converting, setConverting] = useState(false);

  const getConversionOptions = (imageType: string): ConversionOption[] => {
    const type = imageType.toLowerCase();
    if (type.includes('png')) {
      return [
        { format: 'JPG', saveFormat: SaveFormat.JPEG },
        { format: 'JPEG', saveFormat: SaveFormat.JPEG }
      ];
    } else if (type.includes('jpg') || type.includes('jpeg')) {
      return [
        { format: 'PNG', saveFormat: SaveFormat.PNG },
        ...(type.includes('jpg') ? [{ format: 'JPEG', saveFormat: SaveFormat.JPEG }] : []),
        ...(type.includes('jpeg') ? [{ format: 'JPG', saveFormat: SaveFormat.JPEG }] : [])
      ];
    }
    return [
      { format: 'PNG', saveFormat: SaveFormat.PNG },
      { format: 'JPG', saveFormat: SaveFormat.JPEG },
      { format: 'JPEG', saveFormat: SaveFormat.JPEG }
    ];
  };

  const convertImage = async (option: ConversionOption) => {
    setConverting(true);
    try {
      const result = await manipulateAsync(
        imageData.uri,
        [],
        { compress: 0.9, format: option.saveFormat }
      );
      onConversionComplete(result.uri, option.format);
      setModalVisible(false);
    } catch (error) {
      console.error('Erro na conversão:', error);
      Alert.alert('Erro', 'Falha ao converter imagem.');
    } finally {
      setConverting(false);
    }
  };

  const options = getConversionOptions(imageData.type);
  return (
    <View>
      <TouchableOpacity
        style={styles.convertButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Converter Imagem</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Converter para:</Text>
            {options.map((opt, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.optionButton, converting && styles.optionButtonDisabled]}
                onPress={() => convertImage(opt)}
                disabled={converting}
              >
                <Text style={styles.optionText}>
                  {converting ? 'Convertendo...' : opt.format}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// SOLUÇÃO: Salvar na pasta FolioDoc e retornar URI gerada
export async function saveImageToFolioDoc(
  imageUri: string,
  format: string
): Promise<string | null> {
  try {
    const dir = FileSystem.documentDirectory + 'FolioDoc/';
    const info = await FileSystem.getInfoAsync(dir);
    if (!info.exists) {
      await FileSystem.makeDirectoryAsync(dir, { intermediates: true });
    }
    const ext = format.toLowerCase();
    const timestamp = Date.now();
    const fileName = `converted_image_${timestamp}.${ext}`;
    const newUri = dir + fileName;
    await FileSystem.copyAsync({ from: imageUri, to: newUri });
    return newUri;
  } catch (error) {
    console.error('Erro ao salvar em FolioDoc:', error);
    return null;
  }
}

// Opcional: salvar diretamente na galeria
export async function saveImageToLibrary(
  imageUri: string
): Promise<boolean> {
  try {
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') return false;
    const asset = await MediaLibrary.createAssetAsync(imageUri);
    return !!asset;
  } catch (error) {
    console.error('Erro ao salvar na galeria:', error);
    return false;
  }
}

const styles = StyleSheet.create({
  convertButton: { backgroundColor: '#FF9500', padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 15 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 15, width: width * 0.8, maxWidth: 300 },
  modalTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  optionButton: { backgroundColor: '#007AFF', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  optionButtonDisabled: { backgroundColor: '#ccc' },
  optionText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  cancelButton: { backgroundColor: '#FF3B30', padding: 15, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  cancelText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});


