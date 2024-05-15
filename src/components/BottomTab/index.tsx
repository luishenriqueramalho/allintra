import React from "react";
import { SafeAreaView, Text } from "react-native";
import { Content } from "./styles";
import TabOption from "../TabOption";
import Profile from "@/screens/Profile";
import Dashboard from "@/screens/Dashboard";
import Setting from "@/screens/Settings";
import About from "@/screens/About";
import Notice from "@/screens/Notice";
import {
  AboutMenu,
  DashboardMenu,
  NewPaperMenu,
  ProfileMenu,
  SettingsMenu,
} from "@/assets/svg";

interface BottomTabProps {
  changeScreen: (screen: React.ReactNode) => void;
}

const BottomTab: React.FC<BottomTabProps> = ({ changeScreen }) => {
  return (
    <>
      <Content>
        <TabOption
          title="Profile"
          icon={<ProfileMenu />}
          onPress={() => changeScreen(<Profile />)}
        />
        <TabOption
          title="Notice"
          icon={<NewPaperMenu />}
          onPress={() => changeScreen(<Notice />)}
        />
        <TabOption
          title="Dashboard"
          icon={<DashboardMenu />}
          onPress={() => changeScreen(<Dashboard />)}
        />
        <TabOption
          title="Setting"
          icon={<SettingsMenu />}
          onPress={() => changeScreen(<Setting />)}
        />
        <TabOption
          title="About"
          icon={<AboutMenu />}
          onPress={() => changeScreen(<About />)}
        />
      </Content>
      <SafeAreaView />
    </>
  );
};

export default BottomTab;
