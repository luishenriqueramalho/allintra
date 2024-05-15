import React from "react";
import { ItemSelected, SelectOption, Title } from "./styles";

interface TabOptionProps {
  title?: string;
  icon?: string;
  onPress: () => void;
}

const TabOption: React.FC<TabOptionProps> = ({ title, icon, onPress }) => {
  return (
    <SelectOption onPress={onPress}>
      <ItemSelected>{icon}</ItemSelected>
    </SelectOption>
  );
};

export default TabOption;
