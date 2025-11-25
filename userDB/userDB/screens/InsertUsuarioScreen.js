import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, ActivityIndicator, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function UsuarioView() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [loading, setLoading] = useState(true);
  const [guardando, setGuardando] = useState(false);

  // SELECT - Cargar usuarios
  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);
      const data = await controller.obtenerUsuarios();
      setUsuarios(data);
      console.log(`${data.length} usuarios cargados`);
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Inicializar y cargar datos
  useEffect(() => {
    const init = async () => {
      await controller.initialize();
      await cargarUsuarios();
    };
    init();

    controller.addListener(cargarUsuarios);
    return () => {
      controller.removeListener(cargarUsuarios);
    };
  }, [cargarUsuarios]);

  // INSERT - Agregar usuario
  const handleAgregar = async () => {
    if (guardando) return;
    try {
      setGuardando(true);
      const usuarioCreado = await controller.crearUsuario(nombre);
      Alert.alert('Usuario Creado',
        `"${usuarioCreado.nombre}" guardado con ID: ${usuarioCreado.id}`);
      setNombre('');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setGuardando(false);
    }
  };

  // Renderizar cada usuario
  const renderUsuario = ({ item, index }) => (
    <View style={styles.userItem}>
      <View style={styles.userNumber}>
        <Text style={styles.userNumberText}>{index + 1}</Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.nombre}</Text>
        <Text style={styles.userId}>ID: {item.id}</Text>
        <Text style={styles.userDate}>
          {new Date(item.fechaCreacion).toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insertar Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe el nombre del usuario"
        value={nombre}
        onChangeText={setNombre}
      />
      <TouchableOpacity style={styles.button} onPress={handleAgregar}>
        <Text style={styles.buttonText}>Agregar Usuario</Text>
      </TouchableOpacity>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={usuarios}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderUsuario}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
  button: { backgroundColor: '#007AFF', padding: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  userItem: { flexDirection: 'row', marginVertical: 5 },
  userNumber: { width: 30, alignItems: 'center' },
  userNumberText: { fontWeight: 'bold' },
  userInfo: { marginLeft: 10 }
});