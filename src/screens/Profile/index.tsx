import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";
import { Header, PhotoProfile } from "./styles";

const Profile: React.FC = () => {
  return (
    <>
      <NavigationBar title="Perfil" />
      <Wrapper>
        <Header>
          <PhotoProfile>
            <Text>Profile</Text>
          </PhotoProfile>
          <Text>Luis Henrique Ramalho</Text>
        </Header>
      </Wrapper>
    </>
  );
};

export default Profile;
