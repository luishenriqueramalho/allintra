import { StoreProvider } from "@/mobx/store";
import RootStackScreen from "@/navigators";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";

function App() {
  return (
    <StoreProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </StoreProvider>
  );
}

export default App;
