import React, { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import SplashScreen from "react-native-splash-screen";

export default function AnimatedSplash() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 5000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../../assets/animation/logo.json")}
        autoPlay
        loop
      />
    </View>
  );
}
