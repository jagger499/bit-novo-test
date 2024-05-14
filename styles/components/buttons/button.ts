import { StyleSheet } from "react-native";
import { themes } from "../../theme";

export const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 6,
    height: 56,
    backgroundColor: themes.colors.primaryButton,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: themes.colors.disabledButton,
  },
  secondaryText: {
    color: themes.colors.primaryButton
  },
  buttonText: {
    color: themes.colors.white,
    fontSize: 16,
    fontFamily: themes.fonts.semiBold,
  },
  disabledText: {
    color: themes.colors.disabledButtonText,
  },
  keyboard: {
    position: 'relative',
  },
  bottom: {
    position: "absolute",
    bottom: 0,
  },
  backModal: {
    width: 28,
    height: 28,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: themes.colors.modalButton,
    position: 'absolute'
  },
  qrButton: {
    width: 56,
    height: 56,
    backgroundColor: themes.colors.primaryButton,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  phoneModalText: {
    fontFamily: themes.fonts.regular,
    color: themes.colors.primary,
    fontSize: 14
  },
  inputButton: {
    backgroundColor: themes.colors.primaryButton,
    paddingHorizontal: 15,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center'
  },
  inputButtonText: {
    fontFamily: themes.fonts.regular,
    color: themes.colors.white,
    fontSize: 12
  }
});
