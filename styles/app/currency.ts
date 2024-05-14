import { StyleSheet } from "react-native";
import { themes } from "../theme";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: themes.colors.textBackground,
    padding: 20,
    borderRadius: 8
  },
  text: {
    fontFamily: themes.fonts.regular,
    color: themes.colors.textWithBackground
  },
  currency: {
    fontFamily: themes.fonts.bold,
    fontSize: 30,
    color: themes.colors.primary,
  },
  form: {
    rowGap: 15,
  }
});
