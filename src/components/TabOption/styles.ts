import { Colors } from "@/utils/colors";
import styled from "styled-components/native";

export const SelectOption = styled.TouchableOpacity`
  background-color: aqua;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
`;

export const Title = styled.Text`
  color: ${Colors.white};
  text-align: center;
`;
