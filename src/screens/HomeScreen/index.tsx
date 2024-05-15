import BottomTab from "@/components/BottomTab";
import NavigationBar from "@/components/NavigationBar";
import { HomeWrapper, LinearBg, Wrapper } from "@/utils/global";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import Dashboard from "../Dashboard";

const HomeScreen: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<React.ReactNode>(
    <Dashboard />
  );
  return (
    <LinearBg
      colors={["#3B2A50", "#160F1E"]}
      style={StyleSheet.absoluteFill}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <HomeWrapper>{activeScreen}</HomeWrapper>
      <BottomTab changeScreen={setActiveScreen} />
    </LinearBg>
  );
};

export default HomeScreen;
