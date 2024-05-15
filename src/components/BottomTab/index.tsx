import React, { useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState<string>("Dashboard");

  console.log(">>>", selectedTab);

  return (
    <>
      <Content>
        <TabOption
          title="Profile"
          icon={<ProfileMenu isSelected={selectedTab === "Profile"} />}
          onPress={() => {
            changeScreen(<Profile />);
            setSelectedTab("Profile");
          }}
          isSelected={selectedTab === "Profile"}
        />
        <TabOption
          title="Notice"
          icon={<NewPaperMenu isSelected={selectedTab === "Notice"} />}
          onPress={() => {
            changeScreen(<Notice />);
            setSelectedTab("Notice");
          }}
          isSelected={selectedTab === "Notice"}
        />
        <TabOption
          title="Dashboard"
          icon={<DashboardMenu isSelected={selectedTab === "Dashboard"} />}
          onPress={() => {
            changeScreen(<Dashboard />);
            setSelectedTab("Dashboard");
          }}
          isSelected={selectedTab === "Dashboard"}
        />
        <TabOption
          title="Setting"
          icon={<SettingsMenu isSelected={selectedTab === "Setting"} />}
          onPress={() => {
            changeScreen(<Setting />);
            setSelectedTab("Setting");
          }}
          isSelected={selectedTab === "Setting"}
        />
        <TabOption
          title="About"
          icon={<AboutMenu isSelected={selectedTab === "About"} />}
          onPress={() => {
            changeScreen(<About />);
            setSelectedTab("About");
          }}
          isSelected={selectedTab === "About"}
        />
      </Content>
      <SafeAreaView />
    </>
  );
};

export default BottomTab;
