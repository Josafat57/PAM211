import { Text, StyleSheet, View, ScrollView, ImageBackground, Image, Button, Alert } from 'react-native';

const fondo = require('../Examen2doP/assets/fondo_restau.png');
const horchata = require('../Examen2doP/assets/horchata.jpg');
const jamaica = require('../Examen2doP/assets/jamaica.jpg');
const pozole = require('../Examen2doP/assets/pozole.jpg');
const tacos = require('../Examen2doP/assets/tacos.jpg');
const tamales = require('../Examen2doP/assets/tamales.jpg');

export default function Restaurante() {
  const platillos = [
    {
      nombre: 'Tacos',
      descripcion: 'Tortillas rellenas de carne y vegetales.',
      precio: '$80',
      imagen: tacos
    },
    {
      nombre: 'Tamales',
      descripcion: 'Masa de maíz rellena, envuelta en hoja.',
      precio: '$60',
      imagen: tamales
    },
    {
      nombre: 'Pozole',
      descripcion: 'Sopa tradicional con maíz y carne.',
      precio: '$90',
      imagen: pozole
    }
  ];

  const bebidas = [
    {
      nombre: 'Horchata',
      descripcion: 'Bebida dulce de arroz con canela.',
      precio: '$30',
      imagen: horchata
    },
    {
      nombre: 'Jamaica',
      descripcion: 'Infusión de flor de jamaica, refrescante.',
      precio: '$25',
      imagen: jamaica
    }
  ];

  const ordenar = (nombre, precio) => {
    Alert.alert(
      'Confirmar orden',
      `¿Deseas ordenar ${nombre} por ${precio}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Confirmar', onPress: () => console.log(`Orden confirmada: ${nombre}`) }
      ]
    );
  };

  return (
    <ImageBackground source={fondo} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subtitleWhite}>
          Restaurante Mexicano{'\n'}La mejor comida mexicana
        </Text>

        <Text style={styles.header}>Platillos</Text>
        {platillos.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
            <Text style={styles.price}>{item.precio}</Text>
            <Button title="Ordenar" onPress={() => ordenar(item.nombre, item.precio)} />
          </View>
        ))}

        <Text style={styles.header}>Bebidas</Text>
        {bebidas.map((item, index) => (
          <View key={index} style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <Text style={styles.title}>{item.nombre}</Text>
            <Text style={styles.description}>{item.descripcion}</Text>
            <Text style={styles.price}>{item.precio}</Text>
            <Button title="Ordenar" onPress={() => ordenar(item.nombre, item.precio)} />
          </View>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContent: {
    padding: 16
  },
  subtitleWhite: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#000000aa',
    borderRadius: 12,
    marginVertical: 12,
    padding: 12
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    backgroundColor: '#00ffeaff',
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 120,
    borderRadius: 10,
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 4
  },
  price: {
    fontSize: 16,
    color: '#008000',
    marginBottom: 8
  }
});