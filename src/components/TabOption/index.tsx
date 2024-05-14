import React from "react";
import { SelectOption, Title } from "./styles";

interface TabOptionProps {
  title?: string;
  onPress: () => void;
}

const TabOption: React.FC<TabOptionProps> = ({ title, onPress }) => {
  return (
    <SelectOption onPress={onPress}>
      <Title>{title}</Title>
    </SelectOption>
  );
};

export default TabOption;
