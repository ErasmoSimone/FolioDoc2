// src/components/OptionCard.styles.ts
import { StyleSheet } from 'react-native';

// Definindo cores consistentes com as outras páginas
const colors = {
  background: {
    card: '#10141a',       // Cor de fundo dos cards (mesma das boxes)
  },
  border: {
    default: '#262f3c',    // Borda sutil
    active: '#3caae9',     // Borda quando pressionado
  },
  text: {
    primary: '#ffffff',    // Texto branco principal
    secondary: '#6c7989',  // Texto secundário / descrições
  },
  accent: {
    main: '#3caae9',       // Cor principal de destaque
  }
};

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,                // Reduzido para ficar mais compacto
    padding: 20,            // Reduzido para ficar mais compacto
    marginBottom: 16,       // Reduzido para ficar mais compacto
    borderRadius: 12,       // Bordas mais suaves
    backgroundColor: colors.background.card,
    borderWidth: 1,
    borderColor: colors.border.default,
  },
  cardPressed: {
    transform: [{ translateY: -2 }],  // Efeito mais sutil
    borderColor: colors.accent.main,
    shadowColor: colors.accent.main,
    shadowOpacity: 0.2,               // Sombra mais sutil
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  iconBox: {
    width: 50,               // Reduzido para ficar mais compacto
    height: 50,              // Reduzido para ficar mais compacto
    borderRadius: 25,
    backgroundColor: colors.accent.main,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  customIcon: {
    width: 64,              // Reduzido para ficar proporcional
    height: 64,             // Reduzido para ficar proporcional
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
  },
  cardTitle: {
    color: colors.text.primary,
    fontSize: 18,            // Reduzido para ficar mais compacto
    fontWeight: '500',
    marginBottom: 4,         // Reduzido para ficar mais compacto
  },
  cardDesc: {
    color: colors.text.secondary,
    fontSize: 14,            // Reduzido para ficar mais compacto
  },
  // Mantendo os estilos não utilizados diretamente, mas que podem ser usados em outros lugares
  imageIcon: {
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 12,
    position: 'relative',
  },
  imageDot: {
    position: 'absolute',
    top: 6,
    left: 6,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.accent.main,
  },
  imageTriangle: {
    position: 'absolute',
    bottom: 4,
    left: 4,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderBottomWidth: 8,
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.accent.main,
  },
  pdfIcon: {
    color: colors.text.primary,
    fontSize: 20,
    fontWeight: 'bold',
  },
  arrow: {},
});
