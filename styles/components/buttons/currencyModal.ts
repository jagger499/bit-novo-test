import { themes } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  currencyModalButtton: {
    backgroundColor: themes.colors.modalButton,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  currencyModalButtonText: {
    fontSize: 12,
    fontFamily: themes.fonts.bold,
  },
});
