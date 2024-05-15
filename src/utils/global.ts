import { Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  margin-horizontal: ${scale(24)}px;
`;

export const LinearBg = styled(LinearGradient)`
  flex: 1;
  background-color: aqua;
`;

export const HomeWrapper = styled.View`
  flex: 1;
`;

export function scale(size: number, minSize?: number): number {
  const newSize = Math.min(
    size,
    Math.max(size * (Dimensions.get("window").width / 375), minSize || 0)
  );
  return Math.floor(newSize);
}
