import {Text, StyleSheet, View, ScrollView, ImageBackground} from 'react-native'

const ImageBackground = require('../assets/fondo_restau.png')
export default function Restaurante() {
  return (
    <View style={StyleSheet.container}>
      <ScrollView styles={styles.ScrollArea} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={true}>
        <Text style={styles.subtitleWhite}>Restaurante Mexicano</Text>
        <Text style={styles.subtitleWhite}>La mejor comida mexicana</Text>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})