import React from "react";
import {
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from "react-native";
import { CustomButtonProps } from "@/types/components/buttons";
import { styles } from "@/styles/components/buttons/button";
import { useKeyboardVisibility } from "@/hooks/useKeyboardVisibility";
import { Image } from "expo-image";
import { generalStyles } from "@/styles/general";

export const CustomButton: React.FC<
  CustomButtonProps & TouchableHighlightProps
> = ({ disabled, title, secondary, icon, ...props }) => {
  const { isKeyboardVisible } = useKeyboardVisibility();
  let disabledButtonStyle: ViewStyle[] = [];
  let visibleKeyBoardStyle: ViewStyle[] = [];
  let disabledTextStyle: TextStyle[] = [];

  if (disabled || secondary) {
    const textColor = secondary ? styles.secondaryText : styles.disabledText;
    disabledButtonStyle = [styles.disabledButton];
    disabledTextStyle = [textColor];
  }

  if (isKeyboardVisible) {
    visibleKeyBoardStyle = [styles.keyboard];
  }

  return (
    <TouchableHighlight
      disabled={disabled}
      {...props}
      testID="custom-button"
      style={[
        styles.button,
        styles.bottom,
        ...disabledButtonStyle,
        ...visibleKeyBoardStyle,
      ]}
    >
      <View style={[generalStyles.flexRow]}>
        <Text style={[styles.buttonText, ...disabledTextStyle]}>{title}</Text>
        {icon && <Image style={{ width: 20, height: 20 }} source={icon} />}
      </View>
    </TouchableHighlight>
  );
};