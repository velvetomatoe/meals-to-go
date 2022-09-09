import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "./src/infrastructure/theme/colors";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { SafeArea } from "./src/features/restaurants/components/utility/safe-area.component";

import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

const TAB_ICON = {
  Restaurants: {
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
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);
const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              tabBarActiveTintColor: colors.brand.primary,
              tabBarInactiveTintColor: colors.text.disabled,
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Settings} />
            <Tab.Screen name="Settings" component={Map} />
          </Tab.Navigator>
        </NavigationContainer>
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
