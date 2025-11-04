import { Text, StyleSheet, View, Button, } from 'react-native';
import React, { useState } from 'react';
import MenuScreen from './MenuScreen';

export default function ModalScreen() {
   const [screen, setScreen] = useState('modal');

   switch (screen) {
     case 'menu': return <MenuScreen/>;
     default:
       return (
         <View style={styles.background}>
           <Text style={styles.title}>Próximamente...</Text>
           <br/>
           <Text style={styles.title}>En algún futuro cercano esto tendrá contenido...</Text>
           <br/>
           <View style={styles.buttonWrapper}>
             <Button onPress={() => setScreen('menu')} title="Volver al menú" color="#000"/>
           </View>
          
         </View>
       );
   }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000ff',
  },
  title: {
    color: '#fff',
    fontSize: 32,
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
