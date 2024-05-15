import React from "react";
import { SafeAreaView } from "react-native";
import { Content } from "./styles";
import TabOption from "../TabOption";
import Profile from "@/screens/Profile";
import Dashboard from "@/screens/Dashboard";
import Setting from "@/screens/Settings";
import About from "@/screens/About";
import Notice from "@/screens/Notice";

interface BottomTabProps {
  changeScreen: (screen: React.ReactNode) => void;
}

const BottomTab: React.FC<BottomTabProps> = ({ changeScreen }) => {
  return (
    <>
      <Content>
        <TabOption title="Profile" onPress={() => changeScreen(<Profile />)} />
        <TabOption title="Notice" onPress={() => changeScreen(<Notice />)} />
        <TabOption
          title="Dashboard"
          onPress={() => changeScreen(<Dashboard />)}
        />
        <TabOption title="Setting" onPress={() => changeScreen(<Setting />)} />
        <TabOption title="About" onPress={() => changeScreen(<About />)} />
      </Content>
      <SafeAreaView />
    </>
  );
};

export default BottomTab;
