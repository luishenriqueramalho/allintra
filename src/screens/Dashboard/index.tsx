import Charts from "@/components/Charts";
import NavigationBar from "@/components/NavigationBar";
import { BinanceSocket } from "@/config/websocketConfig";
import { Scroll, Wrapper } from "@/utils/global";
import React, { useEffect } from "react";

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
      <Wrapper>
        <Scroll>
          <Charts />
        </Scroll>
      </Wrapper>
    </>
  );
};

export default Dashboard;
