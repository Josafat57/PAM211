import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'

export default function ListScreen() {

  //Flat List
  const ejercicios = [
    { id: '1',  nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '2',  nombre: 'Bruh 1', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '3',  nombre: 'Bruh 2', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '4',  nombre: 'Bruh 3', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '5',  nombre: 'Bruh 3', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '6',  nombre: 'Bruh 4', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '7',  nombre: 'Bruh 5', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '8',  nombre: 'Bruh 6', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '9',  nombre: 'Bruh 7', descripcion: 'Ejercicio para piernas y glúteos' },
    { id: '10', nombre: 'Bruh 8', descripcion: 'Ejercicio para piernas y glúteos' },
  ]

  //Section List
  const contactos = [
    {titulo: 'M', data: ['Miku', 'Teto', 'Rosalina']},
    {titulo: 'J', data: ['Juan mecánico', 'Pepe', 'Pepito']},
    {titulo: 'W', data: ['Willyrex', 'Steve', 'Veggeta']},
  ]
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={styles.titulo}> Lista de Ejercicios </Text>
        <FlatList
        data={ejercicios} 
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.nombres}> {item.nombre} </Text>
            <Text style={styles.descripcion}> {item.descripcion} </Text>
            </View>
        )}
      />
    </View>
      <View style={styles.listContainer}>
        <Text style={styles.titulo}> Contactos </Text>
        <SectionList
        sections={contactos}
        renderItem={({item}) => (
          <Text style={styles.item}> {item} </Text>
        )}
        renderSectionHeader={({section}) => (
          <Text style={styles.header}> {section.titulo} </Text>
        )}
      />
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flex: 1,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item: {
    padding: 10,
    backgroundColor: '#F0F0F0',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descripcion: {
    fontSize: 14,
    color: '#000000ff',
  },
  header: {
    fontSize: 18,
    backgroundColor: '#00ffeaff',
    paadding: 10,
    marginTop: 10,
  }
})