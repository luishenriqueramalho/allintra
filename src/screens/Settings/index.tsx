import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";

const Setting: React.FC = () => {
  return (
    <>
      <NavigationBar title="Configurações" />
      <Wrapper>
        <Text>Setting</Text>
      </Wrapper>
    </>
  );
};

export default Setting;
