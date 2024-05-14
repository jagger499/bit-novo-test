import React from "react";
import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { Header } from "@/components/header";
import { ButtonFactory } from "@/components/buttons";
import { typeButtons } from "@/types/components/buttons";
import { useFontAndSplashScreen } from "@/hooks/useFontAndSplashScreen";

export default function RootLayout() {
  const { fontsLoaded, fontError, onLayoutRootView } = useFontAndSplashScreen();

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: () => (
              <Header onLayout={onLayoutRootView} title="Crear pago" />
            ),
            headerRight: () => (
              <ButtonFactory
                modal="currency"
                typeButton={typeButtons.modal}
                onLayout={onLayoutRootView}
              />
            ),
          }}
        />
        <Stack.Screen
          name="modal-qr"
          options={{
            headerTitle: () => (
              <Header
                onLayout={onLayoutRootView}
                modal
                title=""
              />
            ),
            headerLeft: () => <ButtonFactory typeButton={typeButtons.back} />,
            headerBackVisible: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="modal"
          options={{
            headerTitle: () => (
              <Header
                onLayout={onLayoutRootView}
                modal
                title="Selecciona una divisa"
              />
            ),
            headerLeft: () => <ButtonFactory typeButton={typeButtons.back} />,
            headerBackVisible: false,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="payment"
          options={{
            headerShown: false
          }}
        />
      </Stack>
    </Provider>
  );
}
