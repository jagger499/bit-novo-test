import { StyleSheet } from "react-native";
import { themes } from "../theme";

export const styles = StyleSheet.create({
  backgroundText: {
    backgroundColor: themes.colors.disabledButton,
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  warningText: {
    color: themes.colors.primary,
    fontFamily: themes.fonts.regular,
    fontSize: 12,
    flex: 1,
  },
  qrContainer: {
    backgroundColor: themes.colors.white,
    padding: 10,
    borderRadius: 8,
    width: "100%",
  },
  qrPrice: {
    fontFamily: themes.fonts.bold,
    fontSize: 26,
    color: themes.colors.white,
  },
  qrText: {
    fontFamily: themes.fonts.regular,
    fontSize: 14,
    color: themes.colors.white,
  },
});
