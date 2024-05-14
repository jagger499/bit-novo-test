import { themes } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputCurrencyText: {
    fontFamily: themes.fonts.bold,
    fontSize: 40,
    color: themes.colors.darkText,
  },
  inputCurrencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    columnGap: 5,
    minWidth: '50%',
    width: '100%',
  },
  inputCurrencyContainerStyle: {
    paddingHorizontal: 10, minWidth: 50 
  },
  focusCurrencyTextStyles: {
    color: themes.colors.primaryButton
  },
  focusTextBorder: {
    borderColor: themes.colors.primaryButton
  },
  inputTextPlaceholder: {
    color: themes.colors.placeholderInput,
  },
  inputTextStyles: {
    fontFamily: themes.fonts.regular,
  },
  inputTextIconContainer: {
    flexDirection: 'row',
    columnGap: 10,
    alignItems: 'center'
  },
  maxLengthText: {
    fontFamily: themes.fonts.regular,
    fontSize: 12,
    marginTop: 5,
    textAlign: 'right'
  },
  inputContainer: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    borderColor: themes.colors.ligthPrimary,
    minHeight: 56
  },
  textInputContainer: {
    width: "100%",
  },
  placeColor: {
    color: themes.colors.darkText,
  },
});
