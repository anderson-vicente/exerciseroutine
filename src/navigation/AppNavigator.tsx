import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './DrawerNavigator';
import { RootStackParamList } from './types';
import ExerciseListScreen from 'features/exercises-list/ExerciseListScreen';

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
