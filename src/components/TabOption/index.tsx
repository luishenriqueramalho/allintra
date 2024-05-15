import React from "react";
import { ItemSelected, SelectOption, Title } from "./styles";

interface TabOptionProps {
  title?: string;
  icon?: string;
  onPress: () => void;
  isSelected?: boolean;
}

const TabOption: React.FC<TabOptionProps> = ({
  title,
  icon,
  onPress,
  isSelected,
}) => {
  return (
    <SelectOption onPress={onPress}>
      {isSelected ? <ItemSelected>{icon}</ItemSelected> : <>{icon}</>}
    </SelectOption>
  );
};

export default TabOption;
