import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const NamePeople = styled.Text`
  font-size: ${scale(32)}px;
  font-weight: bold;
  color: ${Colors.white};
  margin-top: ${scale(40)}px;
  margin-horizontal: ${scale(24)}px;
`;
