import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

import { SafeArea } from "../../features/restaurants/components/utility/safe-area.component";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

const TAB_ICON = {
  RestaurantsTab: {
    focused: "restaurant",
    default: "restaurant-outline",
  },
  Map: {
    focused: "ios-map",
    default: "ios-map-outline",
  },
  Settings: {
    focused: "settings",
    default: "settings-outline",
  },
};

const Tab = createBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={
          focused ? TAB_ICON[route.name].focused : TAB_ICON[route.name].default
        }
        size={size}
        color={color}
      />
    ),
    tabBarActiveTintColor: colors.brand.primary,
    tabBarInactiveTintColor: colors.text.disabled,
    headerShown: false,
  };
};

export const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen name="RestaurantsTab" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
