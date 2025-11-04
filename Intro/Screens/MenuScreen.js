import { Text, StyleSheet, View, Button, Platform } from 'react-native';
import React, { useState } from 'react';
import ButtonsScreen from './ButtonsScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import IndicatorScreen from './IndicatorScreen';
import ListScreen from './ListScreen';
import ModalScreen from './ModalScreen';
import Repaso_Screen from './Repaso_Screen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador': return <ContadorScreen />;
    case 'buttons': return <ButtonsScreen />;
    case 'text': return <TextScreen />;
    case 'image': return <ImageScreen />;
    case 'scroll': return <ScrollScreen />;
    case 'indicator': return <IndicatorScreen />;
    case 'list': return <ListScreen />;
    case 'modal': return <ModalScreen />;
    case 'repaso': return <Repaso_Screen />;
    case 'menu':
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Menú de Prácticas</Text>
          <View style={styles.buttonGroup}>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('contador')} title="Práctica Contador" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('buttons')} title="Buttons & Switch" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('text')} title="Text Inputs & Alerts" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('image')} title="ImageBackground & SplashScreen" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('scroll')} title="ScrollView" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('indicator')} title="Activity Indicator" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('list')} title="FlatList y Section List" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('modal')} title="Modal" color="#000" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button onPress={() => setScreen('repaso')} title="Práctica de Repaso" color="#000" />
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 200,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  buttonGroup: {
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: '#000',
    borderWidth: 2,
    borderColor: '#888',
    borderRadius: 8,
    marginBottom: 12,
    width: 220,
    overflow: 'hidden',
  },
});