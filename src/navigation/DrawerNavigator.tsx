import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Importe os ícones
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import HomeScreen from "../features/home/index";
import WorkoutListScreen from "../features/workout-list/WorkoutListScreen";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const username = useSelector((state: RootState) => state.user.username);

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Ionicons name="person-circle-outline" size={40} color="#333" />
        <Text style={styles.username}>{username}</Text>
      </View>

      <View style={styles.drawerItemsContainer}>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNavigator: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Treinar"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          if (route.name === "Treinar") {
            return <MaterialIcons name="checklist" size={size} color={color} />;
          } else if (route.name === "Meus Treinos") {
            return <MaterialIcons name="edit" size={size} color={color} />;
          }
        },
        drawerActiveBackgroundColor: "#f0f0f0",
        drawerInactiveBackgroundColor: "transparent",
        drawerActiveTintColor: "#333",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: { fontSize: 16 },
        drawerItemStyle: {
          borderRadius: 6,
          marginVertical: 4,
          paddingVertical: 2,
          marginHorizontal: 0,
        },
      })}
    >
      <Drawer.Screen name="Treinar" component={HomeScreen} />
      <Drawer.Screen name="Meus Treinos" component={WorkoutListScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
    marginBottom: 20,
  },
  username: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  drawerItemsContainer: {
    paddingHorizontal: 8,
  },
});

export default DrawerNavigator;
