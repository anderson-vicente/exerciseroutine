import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../features/home/index";
import WorkoutListScreen from "features/workout-list/WorkoutListScreen";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Treinar" component={HomeScreen} />
      <Tab.Screen name="Meus Treinos" component={WorkoutListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;
