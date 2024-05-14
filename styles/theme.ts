import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const themes = {
  colors: {
    darkText: "#C0CCDA",
    white: "#FFFFFF",
    transparent: "transparent",
    primary: "#002859",
    ligthPrimary: "#E5E9F2",
    primaryButton: "#035AC5",
    placeholderInput: "#647184",
    disabledButton: "#EAF3FF",
    disabledButtonText: "#71B0FD",
    modalButton: "#D3DCE64D",
    selectedColor: '#EFF2F7',
    textBackground: '#F9FAFC',
    textWithBackground: '#647184'
  },
  fonts: {
    regular: "Mulish-Regular",
    bold: "Mulish-Bold",
    semiBold: "Mulish-SemiBold",
  },
};
