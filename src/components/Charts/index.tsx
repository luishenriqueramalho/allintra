import React from "react";
import { Text, View } from "react-native";
import {
  CodeNameCripto,
  Container,
  CriptoDetail,
  CriptoPrice,
  GraficTime,
  GraficType,
  InfoCripto,
  InfoCriptoDetail,
  NameCripto,
  Percentage,
  PriceCripto,
  PriceCriptoConvert,
  RiseFall,
  SelectTimer,
  TimeType,
  Todo,
} from "./styles";
import { Bitcoin, GraphicArea, GraphicCandle, GraphicLine } from "@/assets/svg";

const Charts: React.FC = () => {
  return (
    <>
      <Container>
        <Todo />
        <GraficTime>
          <GraficType>
            <GraphicLine />
            <GraphicCandle />
            <GraphicArea />
          </GraficType>
          <TimeType>
            <SelectTimer>1D |</SelectTimer>
            <SelectTimer>5D |</SelectTimer>
            <SelectTimer>1M</SelectTimer>
          </TimeType>
        </GraficTime>
        <InfoCripto>
          <CriptoDetail>
            <Bitcoin />
            <InfoCriptoDetail>
              <NameCripto>BTC Bitcoin</NameCripto>
              <CodeNameCripto>BTC/USDT</CodeNameCripto>
            </InfoCriptoDetail>
          </CriptoDetail>
          <CriptoPrice>
            <PriceCripto>$ 61.444,37</PriceCripto>
            <PriceCriptoConvert>R$ 314.096,00</PriceCriptoConvert>
          </CriptoPrice>
          <RiseFall>
            <Percentage>2,12%</Percentage>
          </RiseFall>
        </InfoCripto>
      </Container>
    </>
  );
};

export default Charts;
