// app/src/screens/Converter/styles.ts
import { Platform, StyleSheet } from 'react-native';

// Cores padronizadas baseadas nas outras páginas (pdfArquivosDobloScreenView)
const colors = {
  background: {
    dark: '#04070d',     // Cor de fundo principal escura
    card: '#10141a',     // Cor de fundo dos cards
    elevated: '#04070d', // Cor do header (usando a mesma do fundo para unificar)
  },
  text: {
    primary: '#ffffff',  // Texto branco principal
    secondary: '#6c7989', // Texto secundário / descrições
  },
  accent: {
    main: '#3caae9',     // Cor de destaque azul
  },
  border: {
    light: '#262f3c',    // Cor da borda suave entre seções
  }
};

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background.dark,
    paddingTop: Platform.OS === 'android' ? 25 : 0, // Compensação para Android
  },
  container: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  header: {
    paddingTop: 10,         // Reduzido para deixar mais compacto
    paddingHorizontal: 16,  // Reduzido para deixar mais compacto
    paddingBottom: 10,      // Reduzido para deixar mais compacto
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.background.elevated,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'center', // Centraliza as tabs
    gap: 32,
  },
  tab: {
    color: colors.text.secondary,
    fontSize: 16,           // Reduzido para deixar mais compacto
    fontWeight: '500',
    paddingBottom: 6,       // Reduzido para deixar mais compacto
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  tabActive: {
    color: colors.accent.main,
    borderBottomColor: colors.accent.main,
  },
  // Removido o estilo 'title' pois não estamos mais usando o título
  scrollView: {
    flex: 1,
    backgroundColor: colors.background.dark,
  },
  main: {
    padding: 16,            // Reduzido para dar mais espaço aos cards
    paddingTop: 20,
    paddingBottom: 80,      // Espaço extra para scroll
  },
  comingSoon: {
    color: colors.text.secondary,
    fontSize: 18,
    textAlign: 'center',
    marginTop: 50,
  },
});
