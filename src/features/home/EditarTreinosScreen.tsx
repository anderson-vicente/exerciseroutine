import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assumindo que você já tem o expo/vector-icons
import styles from './ts_styles';

const EditarTreinosScreen: React.FC = () => {
  const handleAddPress = () => {
    Alert.alert("Adicionar Treino", "Funcionalidade para adicionar um novo treino será implementada aqui.");
  };

  return (
    <View style={styles.container}>
      <Text>Editar Treinos</Text>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddPress}
      >
        <Ionicons name="add" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default EditarTreinosScreen;