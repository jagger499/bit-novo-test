import { StyleSheet } from "react-native";
import { themes } from "../../theme";

export const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '100%'
  },
  itemContainerSelected: {
    backgroundColor: themes.colors.selectedColor,
  },
  itemText: {
    color: themes.colors.primary,
    fontFamily: themes.fonts.bold,
    fontSize: 14,
  },
  itemSubText: {
    color: themes.colors.placeholderInput,
    fontFamily: themes.fonts.regular,
    fontSize: 12,
  },
});
