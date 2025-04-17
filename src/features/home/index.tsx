import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../store/slices/userSlice";
import { RootState } from "../../store/store";
import WorkoutCalendar from "features/workout-calendar/WorkoutCalendar";
import styles from "./styles";

const HomeScreen: React.FC = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "Main">>();
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.user.username);

  useEffect(() => {
    dispatch(setUsername("Anderson Vicente"));
  }, [dispatch]);

  const handleCardPress = (exerciceId: string, exerciceTitle: string) => {
    navigation.navigate("WorkoutExerciseList", { exerciceId, exerciceTitle });
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Bem-vindo, {username}!</Text>
        <Text style={styles.subtitle}>17/01 à 18/03</Text>
        <WorkoutCalendar />
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
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
