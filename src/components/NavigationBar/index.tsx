import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NamePeople } from "./styles";

const NavigationBar: React.FC = () => {
  return (
    <>
      <SafeAreaView />
      <NamePeople>Olá, Luis</NamePeople>
    </>
  );
};

export default NavigationBar;
