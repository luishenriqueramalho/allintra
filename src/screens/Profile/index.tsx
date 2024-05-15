import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";

const Profile: React.FC = () => {
  return (
    <>
      <NavigationBar title="Perfil" />
      <Wrapper>
        <Text>Profile</Text>
      </Wrapper>
    </>
  );
};

export default Profile;
