import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas do Stack Navigator
export type RootStackParamList = {
  Main: undefined;
  ExerciseList: { exerciceId: string, exerciceTitle: string };
};

// Tipos para navegação e rotas
export type TreinarScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;
export type ExerciseListScreenRouteProp = RouteProp<RootStackParamList, 'ExerciseList'>;