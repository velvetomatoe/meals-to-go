import React from "react";
import { Text, View } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";

export const SettingsScreen = () => (
  <SafeArea>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings</Text>
    </View>
  </SafeArea>
);
