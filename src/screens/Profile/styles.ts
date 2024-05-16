import { scale } from "@/utils/global";
import styled from "styled-components/native";

export const Header = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const PhotoProfile = styled.View`
  width: ${scale(150)}px;
  height: ${scale(150)}px;
  border-radius: ${scale(100)}px;
  background-color: aqua;
  align-items: center;
  justify-content: center;
  margin-top: ${scale(40)}px;
`;
