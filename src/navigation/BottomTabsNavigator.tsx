import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TreinarScreen from '../features/home/index';
import EditarTreinosScreen from '../features/home/EditarTreinosScreen';

const Tab = createBottomTabNavigator();

const BottomTabsNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Treinar" component={TreinarScreen} />
      <Tab.Screen name="Editar Treinos" component={EditarTreinosScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigator;