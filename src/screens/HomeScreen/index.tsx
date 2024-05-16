import BottomTab from "@/components/BottomTab";
import NavigationBar from "@/components/NavigationBar";
import { HomeWrapper, LinearBg, Wrapper } from "@/utils/global";
import React, { useRef, useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import Dashboard from "../Dashboard";

const HomeScreen: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<React.ReactNode>(
    <Dashboard />
  );
  const opacity = useRef(new Animated.Value(1)).current;

  const changeScreen = (screen: React.ReactNode) => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setActiveScreen(screen);

      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    });
  };

  return (
    <LinearBg
      colors={["#614584", "#160F1E"]}
      style={StyleSheet.absoluteFill}
      start={{ x: 4, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <HomeWrapper>
        <Animated.View style={{ flex: 1, opacity }}>
          {activeScreen}
        </Animated.View>
      </HomeWrapper>
      <BottomTab changeScreen={changeScreen} />
    </LinearBg>
  );
};

export default HomeScreen;
