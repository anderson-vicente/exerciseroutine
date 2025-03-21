import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TreinarScreen from '../features/home/index';
import WorkoutListScreen from 'features/workou-list/WorkoutListScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Treinar" component={TreinarScreen} />
      <Tab.Screen name="Editar Treinos" component={WorkoutListScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;