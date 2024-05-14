import React, { useState } from "react";
import { styles } from "@/styles/components/input";
import { CustomInputProps } from "@/types/components/input";
import {
  ColorValue,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from "react-native";
import { themes, width } from "@/styles/theme";
import { Image } from "expo-image";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export const CurrencyInput: React.FC<CustomInputProps & TextInputProps> = ({
  inputType,
  clearTextOnFocus,
  value = "",
  icon,
  maxLength,
  ...props
}) => {
  const currency = useSelector((state: RootState) => state.payment.currency);
  const [isFocused, setIsFocused] = useState(false);
  let placeHolderColor: ColorValue = "";

  const focusCurrencyTextStyles =
    clearTextOnFocus && (isFocused || `${value}`?.length > 0)
      ? styles.focusCurrencyTextStyles
      : {};

  const currencyWidth = {
    width: `${value}`?.length * 32,
    maxWidth: width - 100,
  };

  const textStyles: TextStyle[] = [styles.inputCurrencyText, focusCurrencyTextStyles];
  placeHolderColor = isFocused
    ? themes.colors.transparent
    : themes.colors.darkText;

  return (
    <View style={[styles.inputCurrencyContainer]}>
      {currency?.subTitle === 'USD' && <Text style={textStyles}>$</Text>}
      {currency?.subTitle === 'GBP' && <Text style={textStyles}>£</Text>}
      <View style={[styles.inputCurrencyContainerStyle]}>
        {icon && <Image source={icon} style={{ width: 20, height: 20 }} />}
        <TextInput
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={placeHolderColor}
          style={[textStyles, { minWidth: 90 }, currencyWidth]}
          maxLength={maxLength}
          selectionColor={themes.colors.primaryButton}
        />
      </View>
      {currency?.subTitle === 'EUR' && <Text style={textStyles}>€</Text>}
    </View>
  );
};
