import { StyleSheet } from "react-native";
import { themes, width } from "../theme";

export const styles = StyleSheet.create({
    title: {
      fontFamily: themes.fonts.bold,
      fontSize: 26,
      color: themes.colors.primary,
    },
    text: {
      fontFamily: themes.fonts.regular,
      fontSize: 14,
      color: themes.colors.primary,
      textAlign: "center",
    },
    buttonContainer: { width: "100%", bottom: -70 },
    blurContainer: {
      flex: 1,
      textAlign: "center",
      justifyContent: "flex-end",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#0028598b",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
    modalContent: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      width: width - 25,
      marginBottom: 20,
      paddingBottom: 100,
      paddingTop: 40,
      alignItems: "center",
      rowGap: 12
    },
  });
  