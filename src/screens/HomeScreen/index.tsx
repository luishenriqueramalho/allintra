import BottomTab from "@/components/BottomTab";
import NavigationBar from "@/components/NavigationBar";
import { HomeWrapper, Wrapper } from "@/utils/global";
import React, { useState } from "react";
import { Text } from "react-native";
import Dashboard from "../Dashboard";

const HomeScreen: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState<React.ReactNode>(
    <Dashboard />
  );
  return (
    <>
      <NavigationBar />
      <HomeWrapper>{activeScreen}</HomeWrapper>
      <BottomTab changeScreen={setActiveScreen} />
    </>
  );
};

export default HomeScreen;
