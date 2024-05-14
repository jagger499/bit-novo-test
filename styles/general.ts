import { StyleSheet } from "react-native";
import { themes } from "./theme";

export const generalStyles = StyleSheet.create({
  h1: {
    color: themes.colors.primary,
    fontFamily: themes.fonts.bold,
    fontSize: 20,
    textAlign: "center",
  },
  label: {
    color: themes.colors.primary,
    fontFamily: themes.fonts.bold,
    fontSize: 14,
    marginBottom: 5
  },
  input: {
    paddingHorizontal: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: themes.colors.ligthPrimary
  },
  flexColumn: {
    flexDirection: 'column',
    columnGap: 5,
    rowGap: 5
  },
  flexRow: {
    flexDirection: 'row',
    columnGap: 10
  },
  flexCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
