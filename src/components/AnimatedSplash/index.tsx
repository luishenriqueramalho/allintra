import React, { useEffect } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";
import SplashScreen from "react-native-splash-screen";

export default function AnimatedSplash() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // Mantenha a splash screen por 3 segundos
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <LottieView source={require("./path/to/animation.json")} autoPlay loop />
    </View>
  );
}
