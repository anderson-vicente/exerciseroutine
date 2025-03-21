import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import ExerciseListScreen from '../features/home/ExerciseListScreen';
import { RootStackParamList } from './types'; // Importe o RootStackParamList

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="ExerciseList" component={ExerciseListScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;