import React, { useState } from "react";
import { styles } from "@/styles/components/input";
import { CustomInputProps, CustomInputTypes } from "@/types/components/input";
import {
  ColorValue,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { generalStyles } from "@/styles/general";
import { themes } from "@/styles/theme";
import { Image } from "expo-image";
import { ButtonFactory } from "../buttons";
import { typeButtons } from "@/types/components/buttons";

export const CustomTextInput: React.FC<CustomInputProps & TextInputProps> = ({
  inputType,
  label,
  clearTextOnFocus,
  value = "",
  icon,
  maxLength,
  editable = true,
  qr,
  phone,
  onPress,
  onPressButton,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const rowContainer = icon ? styles.inputTextIconContainer : {};
  const scalate = icon ? { flex: 1 } : {};
  const focusTextBorder = isFocused ? styles.focusTextBorder : {};

  const editablePlaceholderColor: ColorValue =
    !editable || phone || onPressButton ? themes.colors.primary : themes.colors.placeholderInput;

  const placeHolderColor: ColorValue = isFocused
    ? themes.colors.transparent
    : editablePlaceholderColor;

  const qrContainer = qr ? generalStyles.flexRow : {};
  const qrInput = qr ? { flex: 1 } : {};

  return (
    <View onTouchStart={onPress} style={[styles.textInputContainer, qrContainer]}>
      {label && <Text style={generalStyles.label}>{label}</Text>}
      <View
        style={[styles.inputContainer, qrInput, focusTextBorder, rowContainer]}
      >
        {icon && <Image source={icon} style={{ width: 20, height: 20 }} />}
        {phone && (isFocused || value?.length > 0) && (
          <ButtonFactory modal={"phone"} typeButton={typeButtons.modal} />
        )}
        <TextInput
          {...props}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor={placeHolderColor}
          style={[styles.inputTextStyles, scalate, { minWidth: 90 }]}
          maxLength={maxLength}
          editable={editable}
          selectionColor={themes.colors.primaryButton}
        />
        {onPressButton && (isFocused || value?.length > 0) && (
          <ButtonFactory onPress={onPressButton} title={"Enviar"} typeButton={typeButtons.input} />
        )}
      </View>
      {(isFocused || value?.length > 0) && maxLength && (
        <Text style={styles.maxLengthText}>
          {value?.length}/{maxLength} caracteres
        </Text>
      )}
      {qr && <ButtonFactory typeButton={typeButtons.qr} />}
    </View>
  );
};
