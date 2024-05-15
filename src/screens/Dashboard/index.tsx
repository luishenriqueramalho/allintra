import NavigationBar from "@/components/NavigationBar";
import { BinanceSocket } from "@/config/websocketConfig";
import React, { useEffect } from "react";
import { Text } from "react-native";

const Dashboard: React.FC = () => {
  useEffect(() => {
    const symbol = "btcusdt";
    const interval = "1m";
    const binanceSocket = new BinanceSocket(symbol, interval);

    return () => {
      binanceSocket.close();
    };
  }, []);

  return (
    <>
      <NavigationBar />
      <Text>Dashboard</Text>
    </>
  );
};

export default Dashboard;
