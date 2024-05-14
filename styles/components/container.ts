import { StyleSheet } from "react-native";
import { themes } from "../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.colors.white,
    paddingHorizontal: 15,
    paddingVertical: 30
  },
  containerWidthButton: {
    paddingBottom: 100
  },
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  qr: {
    backgroundColor: themes.colors.primaryButton
  },
  qrText: {
    color: themes.colors.white,
    fontSize: 14,
    fontFamily: themes.fonts.regular
  }
});
