import { Text, StyleSheet, View, Button, Alert, TextInput, Platform } from 'react-native'
import React, { useState } from 'react'

export default function TextScreen () {
  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [comentarios, setComentarios] = useState('');

const mostrarAlerta = () => {
    if (nombre.trim()=== '' || contraseña.trim() === '' || comentarios.trim() === '') {
      if (Platform.OS === 'web') {
        window.alert('ERROR: por favor llena todos los espacios');
      } else {
        Alert.alert('ERROR: por favor llena todos los espacios');
      }
    } else {
      if (Platform.OS === 'web') {
        window.alert('HOLA ' + nombre);
      } else {
        Alert.alert('Hola ' + nombre);
      }
    }
}

    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>TextScreen</Text>

        <TextInput
        style={styles.recuadro}
        placeholder='Escribe tu nombre'
        value = {nombre}
        onChangeText = {setNombre}
        maxLength = {50}
        />

        <TextInput
        style={styles.recuadro} 
        placeholder='Escribe tu contraseña'
        value = {contraseña}
        onChangeText = {setContraseña}
        secureTextEntry={true}
        maxLength = {50}
        keyboardType='numeric'
        />

        <TextInput
        style={[styles.recuadro, styles.comentarios]}
        placeholder='Escribe tus comentarios'
        value = {comentarios}
        onChangeText = {setComentarios}
        multiline={true}
        numberOfLines={4}
        maxLength = {500}
        />

        <Button color = 'blue' title='Mostrar saludo' onPress={mostrarAlerta}/>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recuadro: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
  },
  comentarios: {
    height: 100,
    textAlignVertical: 'top',
  },
});
