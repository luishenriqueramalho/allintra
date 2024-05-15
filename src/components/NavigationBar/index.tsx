import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { NamePeople } from "./styles";

const NavigationBar: React.FC = ({ title }) => {
  return (
    <>
      <SafeAreaView />
      <NamePeople>{title}</NamePeople>
    </>
  );
};

export default NavigationBar;
