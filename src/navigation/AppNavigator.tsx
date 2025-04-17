import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigator from "./DrawerNavigator";
import { RootStackParamList } from "./types";
import WorkoutExerciseListScreen from "features/workout-exercises-list/WorkoutExerciseListScreen";
import WorkoutScreen from "features/workout/WorkoutScreen";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={DrawerNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkoutExerciseList"
        component={WorkoutExerciseListScreen}
        options={({ route }) => ({
          title: route.params.exerciceTitle,
        })}
      />
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
        options={({ route }) => ({
          title: route.params.exerciceTitle,
        })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
