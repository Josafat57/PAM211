import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ButtonsScreen from './ButtonsScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextScreen';
import ImageScreen from './ImageScreen';
import ScrollScreen from './ScrollScreen';
import IndicatorScreen from './IndicatorScreen';
import ListScreen from './ListScreen';
import ModalScreen from './ModalScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch(screen) {
    case 'contador':
        return <ContadorScreen/>;

    case 'buttons':
        return <ButtonsScreen/>;

    case 'text':
        return <TextScreen/>;

    case 'image':
        return <ImageScreen/>;

    case 'scroll':
        return <ScrollScreen/>;

    case 'indicator':
        return <IndicatorScreen/>;
    
    case 'list':
        return <ListScreen/>;

    case 'modal':
        return <ModalScreen/>;

    case 'menu':
    default:
        return (
        <View>
            <Text>Menu de Prácticas</Text>
            <Button onPress={()=>setScreen('contador')} title="Práctica Contador"></Button>
            <Button onPress={()=>setScreen('buttons')} title="Práctica Buttons & Switch"></Button>
            <Button onPress={()=>setScreen('text')} title="Práctica Text Inputs & Alerts"></Button>
            <Button onPress={()=>setScreen('image')} title="Práctica ImageBackground & SplashScreen"></Button>
            <Button onPress={()=>setScreen('scroll')} title="Práctica ScrollView"></Button>
            <Button onPress={()=>setScreen('indicator')} title="Práctica Activity Indicator"></Button>
            <Button onPress={()=>setScreen('list')} title="Práctica FlatList y Section List"></Button>
            <Button onPress={()=>setScreen('modal')} title="Práctica Modal"></Button>
        </View>
    )
  }
}

const styles = StyleSheet.create({})
