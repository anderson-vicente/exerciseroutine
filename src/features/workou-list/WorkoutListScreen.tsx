import React from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const WorkoutListScreen: React.FC = () => {
  const handleAddPress = () => {
    Alert.alert("Adicionar Treino", "Funcionalidade para adicionar um novo treino será implementada aqui.");
  };
  const handleCardPress = (exerciceId: string, exerciceTitle: string) => {
    Alert.alert("Editar Treino", "Funcionalidade para editar treino será implementada aqui.");
  };

  return (
    <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
    >
    <View style={styles.container}>
      <Text style={styles.welcomeText}> Meus Treinos </Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress("treino1", "TREINO 1")}
      >
        <Text style={styles.cardText}>TREINO 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => handleCardPress("treino2", "TREINO 2")}
      >
        <Text style={styles.cardText}>TREINO 2</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddPress}
      >
        <Ionicons name="add" size={24} color="#333" />
      </TouchableOpacity>
    </View>
  </ScrollView>
  );
};

export default WorkoutListScreen;