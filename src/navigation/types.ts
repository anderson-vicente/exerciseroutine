import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define as rotas do Stack Navigator
export type RootStackParamList = {
  Main: undefined;
  WorkoutExerciseList: { exerciceId: string; exerciceTitle: string };
  Workout: { exerciceId: string; exerciceTitle: string };
};

// Tipos para navegação e rotas
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Main"
>;
export type WorkoutExerciseListScreenRouteProp = RouteProp<
  RootStackParamList,
  "WorkoutExerciseList"
>;
export type WorkoutScreenRouteProp = RouteProp<RootStackParamList, "Workout">;
