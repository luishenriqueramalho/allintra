import React from "react";
import { SafeAreaView } from "react-native";
import { Content } from "./styles";
import TabOption from "../TabOption";
import Profile from "@/screens/Profile";
import Dashboard from "@/screens/Dashboard";

interface BottomTabProps {
  changeScreen: (screen: React.ReactNode) => void;
}

const BottomTab: React.FC<BottomTabProps> = ({ changeScreen }) => {
  return (
    <>
      <Content>
        <TabOption title="Profile" onPress={() => changeScreen(<Profile />)} />
        <TabOption
          title="Dashboard"
          onPress={() => changeScreen(<Dashboard />)}
        />
        <SafeAreaView />
      </Content>
    </>
  );
};

export default BottomTab;
