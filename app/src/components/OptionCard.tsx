// src/components/OptionCard.tsx
import React from 'react';
import { Image, ImageSourcePropType, Pressable, Text, View } from 'react-native';
import styles from './OptionCard.styles';

// Importar as imagens
const images = {
  converter: require('../assets/icons/converter.png'),
  doc2pdf: require('../assets/icons/doc2pdf.png'),
  merge: require('../assets/icons/merge.png'),
  pdf: require('../assets/icons/pdf.png'),
  pdf2x: require('../assets/icons/pdf2x.png'),
};

export type Variant =
  | 'image'
  | 'pdfFoto'
  | 'pdfFotoDoblo'
  | 'pdfArquivosDoblo'
  | 'pdfArquivo';

export interface Props {
  variant?: Variant;
  imageSource?: ImageSourcePropType;
  title: string;
  description: string;
  onPress: () => void;
}

const iconMap: Record<Variant, ImageSourcePropType> = {
  image: images.converter,
  pdfFoto: images.pdf,
  pdfFotoDoblo: images.pdf2x,
  pdfArquivosDoblo: images.merge,
  pdfArquivo: images.doc2pdf,
};

const OptionCard: React.FC<Props> = ({ 
  variant = 'image', 
  imageSource, 
  title, 
  description, 
  onPress 
}) => {
  const iconSource = imageSource || iconMap[variant];
  
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
      onPress={onPress}
    >
      <View style={styles.iconBox}>
        <Image source={iconSource} style={styles.customIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDesc}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default OptionCard;
