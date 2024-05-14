import RootStackScreen from "@/navigators";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default App;
