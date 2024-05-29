import NavigationBar from "@/components/NavigationBar";
import React from "react";
import { ScrollView, Text } from "react-native";
import {
  ButtonOption,
  FeedVw,
  Header,
  Line,
  PlusAdd,
  RollOptions,
  RowSelect,
  StrategyVw,
  TitleButton,
  TitleTab,
} from "./styles";
import { Wrapper } from "@/utils/global";
import { AddPlus } from "@/assets/svg";
import Strategy from "./Strategy";

const Home: React.FC = () => {
  return (
    <>
      <NavigationBar />
      <Header>
        <StrategyVw>
          <TitleTab>Estratégia</TitleTab>
        </StrategyVw>
        <FeedVw>
          <TitleTab>Feeds</TitleTab>
        </FeedVw>
      </Header>
      <Line />
      <Wrapper>
        <RowSelect>
          <ScrollView horizontal>
            <RollOptions>
              <ButtonOption>
                <TitleButton>All</TitleButton>
              </ButtonOption>
              <ButtonOption>
                <TitleButton>Minhas estratégias</TitleButton>
              </ButtonOption>
              <ButtonOption>
                <TitleButton>Investidos</TitleButton>
              </ButtonOption>
            </RollOptions>
          </ScrollView>
          <PlusAdd>
            <AddPlus />
          </PlusAdd>
        </RowSelect>
        <Strategy />
      </Wrapper>
    </>
  );
};

export default Home;
