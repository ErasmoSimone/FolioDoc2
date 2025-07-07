// app/src/screens/Funcion/imageScreenView.tsx
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { ImageConverter, imageSeletor, saveImageToFolioDoc } from '../../utils/imageConvertSalve';

async function ensurePerms(): Promise<boolean> {
  const { status } = await MediaLibrary.requestPermissionsAsync();
  if (status !== 'granted') {
    Alert.alert('Permissão necessária', 'Precisamos de acesso à galeria para salvar imagens.');
    return false;
  }
  return true;
}

async function debugListFolioDoc(): Promise<void> {
  const dir = FileSystem.documentDirectory + 'FolioDoc/';
  const info = await FileSystem.getInfoAsync(dir);
  console.log('⮕ FolioDoc existe?', info.exists);
  if (info.exists) {
    const files = await FileSystem.readDirectoryAsync(dir);
    console.log('⮕ Conteúdo de FolioDoc:', files);
  }
}

const { width } = Dimensions.get('window');
const COLORS = { background: '#04070d', containerBg: '#10141a', primary: '#3caae9', success: '#34C759', text: '#fff', textSecondary: '#6c7989' } as const;

interface ImageData { uri: string; type: string; fileName: string; }

export default function ImageScreenView() {
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [convertedImage, setConvertedImage] = useState<{ uri: string; format: string } | null>(null);

  const handleBack = () => router.back();

  const handleImageSelection = (img: ImageData) => {
    console.log('Imagem selecionada:', img);
    setSelectedImage(img);
    setConvertedImage(null);
  };

  const handleSelectImage = () => {
    imageSeletor(img => handleImageSelection(img));
  };

  const handleConversionComplete = (uri: string, format: string) => {
    console.log('Conversão completa:', { uri, format });
    setConvertedImage({ uri, format });
  };

  const handleSaveImage = async () => {
    if (!convertedImage) return;
    if (!(await ensurePerms())) return;

    // copia e recebe a URI do arquivo
    const savedUri = await saveImageToFolioDoc(convertedImage.uri, convertedImage.format);
    if (!savedUri) {
      return Alert.alert('Erro', 'Não foi possível salvar na pasta FolioDoc.');
    }

    // cria asset e álbum na galeria
    try {
      const asset = await MediaLibrary.createAssetAsync(savedUri);
      await MediaLibrary.createAlbumAsync('FolioDoc', asset, false);
    } catch (e) {
      console.warn('Falha ao criar asset/album:', e);
    }

    await debugListFolioDoc();
    Alert.alert('Sucesso', 'Imagem salva na galeria no álbum FolioDoc!');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.imageContainer}>
        {convertedImage ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: convertedImage.uri }} style={styles.selectedImage} resizeMode="contain" />
            <View style={styles.imageInfoBadge}>
              <Text style={styles.imageInfoText}>Convertido para: {convertedImage.format}</Text>
            </View>
          </View>
        ) : selectedImage ? (
          <View style={styles.imageWrapper}>
            <Image source={{ uri: selectedImage.uri }} style={styles.selectedImage} resizeMode="contain" />
            <View style={styles.imageInfoBadge}>
              <Text style={styles.imageInfoText}>Tipo: {selectedImage.type.toUpperCase()}</Text>
            </View>
          </View>
        ) : (
          <Text style={styles.placeholderText}>Nenhuma imagem selecionada</Text>
        )}
      </View>

      <TouchableOpacity style={styles.selectButton} onPress={handleSelectImage}>
        <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
      </TouchableOpacity>

      {selectedImage && (
        <View style={styles.converterContainer}>
          <ImageConverter imageData={selectedImage} onConversionComplete={handleConversionComplete} />
        </View>
      )}

      {convertedImage && (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveImage} activeOpacity={0.8}>
          <Text style={styles.saveButtonText}>Salvar na Galeria</Text>
        </TouchableOpacity>
      )}

      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleBack}>
          <Text style={styles.actionButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background, padding: 20, paddingTop: 40 },
  imageContainer: { flex: 1, backgroundColor: COLORS.containerBg, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
  imageWrapper: { width: '100%', height: '100%', position: 'relative' },
  selectedImage: { width: '100%', height: '100%', borderRadius: 12 },
  imageInfoBadge: { position: 'absolute', bottom: 10, left: 10, backgroundColor: 'rgba(0,0,0,0.7)', padding: 5, borderRadius: 6 },
  imageInfoText: { color: COLORS.text, fontSize: 12 },
  placeholderText: { color: COLORS.textSecondary, fontSize: 16, textAlign: 'center' },
  selectButton: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  selectButtonText: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
  converterContainer: { marginBottom: 20 },
  saveButton: { backgroundColor: COLORS.success, padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  saveButtonText: { color: COLORS.text, fontSize: 16, fontWeight: '600' },
  actionButtonsContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  actionButton: { backgroundColor: COLORS.containerBg, padding: 12, borderRadius: 8, width: (width - 60) / 2, alignItems: 'center' },
  actionButtonText: { color: COLORS.text, fontSize: 16 }
});
