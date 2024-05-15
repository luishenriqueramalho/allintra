import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Colors } from "@/utils/colors";
import { scale } from "@/utils/global";
import styled from "styled-components/native";
import { AreaChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

export const Container = styled.View`
  width: 100%;
  height: 125px;
  background-color: ${Colors.backgroundGraphic};
`;

const ChartsArea: React.FC = ({ dataPrice }) => {
  const [cryptoArea, setCryptoArea] = useState<any[]>([]);

  useEffect(() => {
    if (dataPrice) {
      const newDataPoint = {
        timestamp: new Date(dataPrice.E),
        price: parseFloat(dataPrice.k.c),
      };

      setCryptoArea((prevData) => {
        const newData = [...prevData, newDataPoint];
        if (newData.length > 30) {
          return newData.slice(newData.length - 30);
        }
        return newData;
      });
    }
  }, [dataPrice]);

  const data = cryptoArea.map((c) => c.price);

  return (
    <Container>
      <AreaChart
        style={{ flex: 1 }}
        data={data}
        svg={{ fill: "rgba(134, 65, 244, 0.2)", stroke: "rgb(134, 65, 244)" }}
        contentInset={{ top: 20, bottom: 20 }}
        curve={shape.curveLinear}
      />
    </Container>
  );
};

export default ChartsArea;
