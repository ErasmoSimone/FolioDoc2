// app/src/screens/Converter/index.tsx
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import OptionCard from '../../components/OptionCard';
import styles from './styles';

// Definindo as rotas válidas para evitar erros de tipagem
type AppRoutes =
  | "/src/screens/Funcion/imageScreenView"
  | "/src/screens/Funcion/pdfFotoScreenView"
  | "/src/screens/Funcion/pdfFotoDobloScreenView"
  | "/src/screens/Funcion/pdfArquivosDobloScreenView"
  | "/src/screens/Funcion/pdfArquivoScreenView";

export default function ConverterScreen() {
  const [tab, setTab] = useState<'Converter' | 'Scanner' | 'Account'>('Converter');
  const tabs = ['Converter', 'Scanner', 'Account'] as const;

  
  // Função de navegação para as telas de conversão
  const navigateTo = (screenName: AppRoutes) => {
    router.push(screenName as any);
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#04070d" />
      <View style={styles.container}>
        {/* Header - Versão mais compacta */}
        <View style={styles.header}>
          <View style={styles.tabRow}>
            {tabs.map(t => (
              <Pressable key={t} onPress={() => setTab(t)}>
                <Text style={[styles.tab, tab === t && styles.tabActive]}>
                  {t}
                </Text>
              </Pressable>
            ))}
          </View>
          {/* Removido o título para deixar mais compacto */}
        </View>
        
        {/* Conteúdo com Scroll */}
        {tab === 'Converter' && (
          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.main}
            showsVerticalScrollIndicator={false}
            bounces={true}
            alwaysBounceVertical={true}>
            
            {/* Navegação para imageScreenView */}
            <OptionCard
              variant="image"
              title="Converter Imagem"
              description="JPG ↔ PNG em segundos"
              onPress={() => navigateTo("/src/screens/Funcion/imageScreenView")}
            />
            
            {/* Navegação para pdfFotoScreenView */}
            <OptionCard
              variant="pdfFoto"
              title="Criar PDF"
              description="Transforme fotos em PDF"
              onPress={() => navigateTo("/src/screens/Funcion/pdfFotoScreenView")}
            />
            
            {/* Navegação para pdfFotoDobloScreenView */}
            <OptionCard
              variant="pdfFotoDoblo"
              title="Criar PDF 2×"
              description="Duas fotos por página"
              onPress={() => navigateTo("/src/screens/Funcion/pdfFotoDobloScreenView")}
            />
            
            {/* Navegação para pdfArquivosDobloScreenView */}
            <OptionCard
              variant="pdfArquivosDoblo"
              title="PDF Vários Arquivos"
              description="Mescle PDFs num só"
              onPress={() => navigateTo("/src/screens/Funcion/pdfArquivosDobloScreenView")}
            />
            
            {/* Navegação para pdfArquivoScreenView */}
            <OptionCard
              variant="pdfArquivo"
              title="Documento → PDF"
              description="DOCX ou TXT em PDF"
              onPress={() => navigateTo("/src/screens/Funcion/pdfArquivoScreenView")}
            />
          </ScrollView>
        )}
        
        {/* Other tabs */}
        {tab === 'Scanner' && (
          <View style={styles.main}>
            <Text style={styles.comingSoon}>Scanner em breve...</Text>
          </View>
        )}
        
        {tab === 'Account' && (
          <View style={styles.main}>
            <Text style={styles.comingSoon}>Conta em breve...</Text>
          </View>
        )}
        
        {/* Modal Integration */}
        
        /
      </View>
    </SafeAreaView>
  );
}
