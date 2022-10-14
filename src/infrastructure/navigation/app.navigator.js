import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../theme/colors";

import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator";
import { MapScreen } from "../../features/map/screens/map.screen";

import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favorites/favorites.context";

const TAB_ICON = {
  RestaurantsTab: {
    focused: "restaurant",
    default: "restaurant-outline",
  },
  MapTab: {
    focused: "ios-map",
    default: "ios-map-outline",
  },
  SettingsTab: {
    focused: "settings",
    default: "settings-outline",
  },
};

const Tab = createBottomTabNavigator();

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
  <FavoritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator screenOptions={createScreenOptions}>
          <Tab.Screen name="RestaurantsTab" component={RestaurantsNavigator} />
          <Tab.Screen name="MapTab" component={MapScreen} />
          <Tab.Screen name="SettingsTab" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavoritesContextProvider>
);
