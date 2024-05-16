import NavigationBar from "@/components/NavigationBar";
import { Wrapper } from "@/utils/global";
import React from "react";
import { Text } from "react-native";

const Wallet: React.FC = () => {
  return (
    <>
      <NavigationBar title="Carteiras" />
      <Wrapper>
        <Text>Wallet</Text>
      </Wrapper>
    </>
  );
};

export default Wallet;
