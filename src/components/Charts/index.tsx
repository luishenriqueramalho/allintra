import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
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
import { BinanceSocket } from "@/config/websocketConfig";
import ChartsLine from "./ChartsLine";
import ChartsArea from "./ChartsArea";
import ChartsCandle from "./ChartsCandle";

const Charts: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<any>(null);
  const [selectedChart, setSelectedChart] = useState<
    "line" | "candle" | "area"
  >("line");

  useEffect(() => {
    const symbol = "btcusdt";
    const interval = "1m";
    const binanceSocket = new BinanceSocket(symbol, interval);

    binanceSocket.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      //console.log("WebSocket message received:", data);
      setCryptoData(data);
    };

    return () => {
      binanceSocket.close();
    };
  }, []);

  const formatPrice = (price) => {
    const numberPrice = parseFloat(price);
    return numberPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const calculateConvertedPrice = (price) => {
    const conversionRate = 5.12; // Taxa de conversão
    const convertedPrice = parseFloat(price) * conversionRate;
    return convertedPrice.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const handleChartTypeChange = (chartType: "line" | "candle" | "area") => {
    setSelectedChart(chartType);
  };

  return (
    <>
      <Container>
        {selectedChart === "line" && <ChartsLine dataPrice={cryptoData} />}
        {selectedChart === "candle" && <ChartsCandle dataPrice={cryptoData} />}
        {selectedChart === "area" && <ChartsArea dataPrice={cryptoData} />}
        <GraficTime>
          <GraficType>
            <TouchableOpacity onPress={() => handleChartTypeChange("line")}>
              <GraphicLine />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChartTypeChange("candle")}>
              <GraphicCandle />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChartTypeChange("area")}>
              <GraphicArea />
            </TouchableOpacity>
          </GraficType>
        </GraficTime>
        <InfoCripto>
          <CriptoDetail>
            <Bitcoin />
            <InfoCriptoDetail>
              <NameCripto>BTC Bitcoin</NameCripto>
              <CodeNameCripto>
                {cryptoData ? cryptoData.k.s : "Loading..."}
              </CodeNameCripto>
            </InfoCriptoDetail>
          </CriptoDetail>
          <CriptoPrice>
            <PriceCripto>
              {cryptoData ? `$ ${formatPrice(cryptoData.k.c)}` : "Loading..."}
            </PriceCripto>
            <PriceCriptoConvert>
              {cryptoData
                ? calculateConvertedPrice(cryptoData.k.c)
                : "Calculando..."}
            </PriceCriptoConvert>
          </CriptoPrice>
        </InfoCripto>
      </Container>
    </>
  );
};

export default Charts;
