import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainTabParamList } from "../types/navigation";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator<MainTabParamList>();

// Temporary placeholder components
const PlaceholderScreen = ({ name }: { name: string }) => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>{name} Screen</Text>
  </View>
);

export const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={() => <PlaceholderScreen name="Home" />} />
      <Tab.Screen name="Workouts" component={() => <PlaceholderScreen name="Workouts" />} />
      <Tab.Screen name="Progress" component={() => <PlaceholderScreen name="Progress" />} />
      <Tab.Screen name="Profile" component={() => <PlaceholderScreen name="Profile" />} />
    </Tab.Navigator>
  );
};
