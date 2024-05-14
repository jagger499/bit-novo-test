import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export const useFontAndSplashScreen = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Mulish-Bold": require("@/assets/fonts/Mulish-Bold.ttf"),
    "Mulish-SemiBold": require("@/assets/fonts/Mulish-SemiBold.ttf"),
    "Mulish-Regular": require("@/assets/fonts/Mulish-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  return { fontsLoaded, fontError, onLayoutRootView };
};
